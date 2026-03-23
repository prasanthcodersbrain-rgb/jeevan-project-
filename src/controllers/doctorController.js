import {
  Appointment,
  Payment,
  Payout,
  Specialty,
  User
} from "../models/index.js";

export const getDoctorAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.findAll({
      where: { doctorId: req.user.id },
      include: [
        {
          model: User,
          as: "patient",
          attributes: ["id", "fullName", "phone", "email"]
        },
        {
          model: Specialty,
          as: "specialty",
          attributes: ["id", "name"]
        }
      ],
      order: [["appointmentDate", "ASC"]]
    });

    res.json({ appointments });
  } catch (error) {
    next(error);
  }
};

export const getDoctorEarnings = async (req, res, next) => {
  try {
    const [payouts, payments] = await Promise.all([
      Payout.findAll({
        where: { doctorId: req.user.id },
        include: [
          {
            model: Payment,
            as: "payment",
            attributes: [
              "id",
              "appointmentId",
              "amount",
              "commissionAmount",
              "doctorShareAmount",
              "status",
              "createdAt"
            ],
            include: [
              {
                model: Appointment,
                as: "appointment",
                attributes: ["id", "appointmentDate", "patientAddress"],
                include: [
                  {
                    model: User,
                    as: "patient",
                    attributes: ["id", "fullName"]
                  }
                ]
              }
            ]
          }
        ],
        order: [["paidAt", "DESC"]]
      }),
      Payment.findAll({
        where: {
          doctorId: req.user.id,
          status: "paid"
        },
        include: [
          {
            model: Appointment,
            as: "appointment",
            attributes: ["id", "appointmentDate", "patientAddress"],
            include: [
              {
                model: User,
                as: "patient",
                attributes: ["id", "fullName"]
              }
            ]
          },
          {
            model: Payout,
            as: "payout",
            required: false
          }
        ],
        order: [["createdAt", "DESC"]]
      })
    ]);

    const payoutPaymentIds = new Set(payouts.map((item) => item.paymentId));
    const pendingPayments = payments.filter((payment) => !payoutPaymentIds.has(payment.id));

    const totalReceived = payouts.reduce(
      (sum, payout) => sum + Number(payout.payoutAmount || 0),
      0
    );
    const totalPending = pendingPayments.reduce(
      (sum, payment) => sum + Number(payment.doctorShareAmount || 0),
      0
    );
    const totalCommission = payments.reduce(
      (sum, payment) => sum + Number(payment.commissionAmount || 0),
      0
    );

    res.json({
      summary: {
        totalReceived: Number(totalReceived.toFixed(2)),
        totalPending: Number(totalPending.toFixed(2)),
        totalCommission: Number(totalCommission.toFixed(2))
      },
      payouts,
      pendingPayments
    });
  } catch (error) {
    next(error);
  }
};

export const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;

    const appointment = await Appointment.findOne({
      where: {
        id: appointmentId,
        doctorId: req.user.id
      }
    });

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    if (!["accepted", "rejected", "completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid appointment status" });
    }

    appointment.status = status;
    await appointment.save();

    res.json({
      message: `Appointment ${status} successfully`,
      appointment
    });
  } catch (error) {
    next(error);
  }
};
