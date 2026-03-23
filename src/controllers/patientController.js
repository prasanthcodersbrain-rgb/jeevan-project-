import env from "../config/env.js";
import {
  Appointment,
  DoctorProfile,
  Payment,
  Review,
  Specialty,
  User
} from "../models/index.js";
import { calculateDistanceKm } from "../services/locationService.js";

export const getSpecialties = async (req, res, next) => {
  try {
    const specialties = await Specialty.findAll({
      order: [["name", "ASC"]]
    });

    res.json({ specialties });
  } catch (error) {
    next(error);
  }
};

export const getPatientAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.findAll({
      where: { patientId: req.user.id },
      include: [
        {
          model: User,
          as: "doctor",
          attributes: ["id", "fullName", "email", "phone"]
        },
        {
          model: Specialty,
          as: "specialty",
          attributes: ["id", "name"]
        },
        {
          model: Payment,
          as: "payment",
          attributes: [
            "id",
            "amount",
            "paymentGateway",
            "status",
            "commissionAmount",
            "doctorShareAmount",
            "createdAt"
          ],
          required: false
        },
        {
          model: Review,
          as: "review",
          attributes: ["id", "rating", "comment", "createdAt"],
          required: false
        }
      ],
      order: [["appointmentDate", "DESC"]]
    });

    res.json({ appointments });
  } catch (error) {
    next(error);
  }
};

export const getNearbyDoctors = async (req, res, next) => {
  try {
    const { lat, lng, specialtyId, radiusKm = 20 } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ message: "lat and lng are required" });
    }

    const include = [
      {
        model: User,
        as: "user",
        attributes: ["id", "fullName", "email", "phone"]
      },
      {
        model: Specialty,
        as: "specialties",
        through: { attributes: [] },
        where: specialtyId ? { id: Number(specialtyId) } : undefined,
        required: Boolean(specialtyId)
      }
    ];

    const doctors = await DoctorProfile.findAll({
      where: {
        approvalStatus: "approved",
        isAvailable: true
      },
      include
    });

    const doctorsWithDistance = doctors
      .map((doctor) => {
        const distanceKm = calculateDistanceKm(lat, lng, doctor.latitude, doctor.longitude);

        return {
          ...doctor.toJSON(),
          distanceKm: Number(distanceKm.toFixed(2))
        };
      })
      .filter(
        (doctor) =>
          doctor.distanceKm <= Number(radiusKm) &&
          doctor.distanceKm <= Number(doctor.serviceRadiusKm || radiusKm)
      )
      .sort((left, right) => left.distanceKm - right.distanceKm);

    res.json({ doctors: doctorsWithDistance });
  } catch (error) {
    next(error);
  }
};

export const bookAppointment = async (req, res, next) => {
  try {
    const {
      doctorId,
      specialtyId,
      appointmentDate,
      symptoms,
      visitType,
      patientAddress,
      patientLatitude,
      patientLongitude
    } = req.body;

    const doctorProfile = await DoctorProfile.findOne({ where: { userId: doctorId } });

    if (!doctorProfile || doctorProfile.approvalStatus !== "approved") {
      return res.status(400).json({ message: "Doctor is not available for booking" });
    }

    const appointment = await Appointment.create({
      patientId: req.user.id,
      doctorId,
      specialtyId,
      appointmentDate,
      symptoms,
      visitType,
      patientAddress,
      patientLatitude,
      patientLongitude,
      amount: doctorProfile.consultationFee
    });

    res.status(201).json({
      message: "Appointment created successfully",
      appointment
    });
  } catch (error) {
    next(error);
  }
};

export const createPayment = async (req, res, next) => {
  try {
    const { appointmentId, paymentGateway = "mock", gatewayTransactionId } = req.body;
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment || appointment.patientId !== req.user.id) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    const existingPayment = await Payment.findOne({
      where: { appointmentId: appointment.id }
    });

    if (existingPayment) {
      return res.status(400).json({ message: "Payment already exists for this appointment" });
    }

    const amount = Number(appointment.amount);
    const commissionAmount = Number(((amount * env.appCommissionRate) / 100).toFixed(2));
    const doctorShareAmount = Number((amount - commissionAmount).toFixed(2));

    const payment = await Payment.create({
      appointmentId: appointment.id,
      patientId: appointment.patientId,
      doctorId: appointment.doctorId,
      paymentGateway,
      gatewayTransactionId,
      amount,
      commissionAmount,
      doctorShareAmount,
      status: "paid"
    });

    res.status(201).json({
      message: "Payment recorded successfully",
      payment
    });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const { appointmentId, rating, comment } = req.body;
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment || appointment.patientId !== req.user.id) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    if (appointment.status !== "completed") {
      return res.status(400).json({ message: "Review can be added only after appointment completion" });
    }

    const existingReview = await Review.findOne({
      where: { appointmentId }
    });

    if (existingReview) {
      return res.status(400).json({ message: "Review already submitted for this appointment" });
    }

    const review = await Review.create({
      appointmentId,
      patientId: req.user.id,
      doctorId: appointment.doctorId,
      rating,
      comment
    });

    res.status(201).json({
      message: "Review submitted successfully",
      review
    });
  } catch (error) {
    next(error);
  }
};
