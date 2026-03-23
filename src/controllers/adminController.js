import { fn, col } from "sequelize";
import {
  Appointment,
  DoctorProfile,
  Payment,
  Payout,
  Review,
  Specialty,
  User
} from "../models/index.js";

export const getPendingDoctors = async (req, res, next) => {
  try {
    const doctors = await DoctorProfile.findAll({
      where: { approvalStatus: "pending" },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "fullName", "email", "phone"]
        },
        {
          model: Specialty,
          as: "specialties",
          through: { attributes: [] }
        }
      ]
    });

    res.json({ doctors });
  } catch (error) {
    next(error);
  }
};

export const updateDoctorApproval = async (req, res, next) => {
  try {
    const { doctorId } = req.params;
    const { approvalStatus } = req.body;

    const doctorProfile = await DoctorProfile.findOne({ where: { userId: doctorId } });

    if (!doctorProfile) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }

    if (!["approved", "rejected"].includes(approvalStatus)) {
      return res.status(400).json({ message: "Invalid approval status" });
    }

    doctorProfile.approvalStatus = approvalStatus;
    await doctorProfile.save();

    res.json({
      message: `Doctor ${approvalStatus} successfully`,
      doctorProfile
    });
  } catch (error) {
    next(error);
  }
};

export const getDashboard = async (req, res, next) => {
  try {
    const [
      doctorSummary,
      appointmentSummary,
      paymentSummary,
      reviewSummary,
      recentPayments,
      recentReviews
    ] =
      await Promise.all([
        DoctorProfile.findAll({
          attributes: ["approvalStatus", [fn("COUNT", col("id")), "count"]],
          group: ["approvalStatus"]
        }),
        Appointment.count(),
        Payment.sum("amount"),
        Review.findAll({
          attributes: [[fn("AVG", col("rating")), "averageRating"], [fn("COUNT", col("id")), "totalReviews"]]
        }),
        Payment.findAll({
          limit: 5,
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: User,
              as: "patient",
              attributes: ["id", "fullName"]
            },
            {
              model: User,
              as: "doctor",
              attributes: ["id", "fullName"]
            },
            {
              model: Payout,
              as: "payout",
              required: false,
              attributes: ["id", "status", "payoutAmount", "paidAt"]
            }
          ]
        }),
        Review.findAll({
          limit: 5,
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: User,
              as: "patient",
              attributes: ["id", "fullName"]
            },
            {
              model: User,
              as: "doctor",
              attributes: ["id", "fullName"]
            }
          ]
        })
      ]);

    res.json({
      doctorSummary,
      totalAppointments: appointmentSummary,
      totalPayments: Number(paymentSummary || 0),
      reviewSummary: reviewSummary[0],
      recentPayments,
      recentReviews
    });
  } catch (error) {
    next(error);
  }
};

export const createPayout = async (req, res, next) => {
  try {
    const { paymentId } = req.body;
    const payment = await Payment.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    const existingPayout = await Payout.findOne({
      where: { paymentId: payment.id }
    });

    if (existingPayout) {
      return res.status(400).json({ message: "Payout already processed for this payment" });
    }

    const payout = await Payout.create({
      doctorId: payment.doctorId,
      paymentId: payment.id,
      grossAmount: payment.amount,
      commissionAmount: payment.commissionAmount,
      payoutAmount: payment.doctorShareAmount,
      status: "processed"
    });

    res.status(201).json({
      message: "Doctor payout created successfully",
      payout
    });
  } catch (error) {
    next(error);
  }
};
