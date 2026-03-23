const demoAppointments = [
  {
    patientEmail: "patient2@example.com",
    doctorEmail: "doctor2@example.com",
    specialtyName: "Dermatology",
    appointmentDate: "2026-03-23T15:37:00.000Z",
    symptoms: "Skin rash and itching for three days",
    visitType: "home",
    status: "completed",
    patientAddress: "HustleHub Tech Park, HSR Layout, Bengaluru",
    patientLatitude: 12.9118,
    patientLongitude: 77.6477,
    amount: 650,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1001",
    paymentStatus: "paid",
    review: {
      rating: 5,
      comment: "Very helpful consultation and clear prescription."
    },
    payoutProcessed: true
  },
  {
    patientEmail: "patient@example.com",
    doctorEmail: "doctor1@example.com",
    specialtyName: "Diabetology",
    appointmentDate: "2026-03-21T10:00:00.000Z",
    symptoms: "Sugar fluctuation and tiredness",
    visitType: "home",
    status: "completed",
    patientAddress: "Indiranagar, Bengaluru",
    patientLatitude: 12.9719,
    patientLongitude: 77.6412,
    amount: 700,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1002",
    paymentStatus: "paid",
    review: {
      rating: 4,
      comment: "Doctor explained diet and medicines clearly."
    },
    payoutProcessed: false
  },
  {
    patientEmail: "patient3@example.com",
    doctorEmail: "doctor4@example.com",
    specialtyName: "General Physician",
    appointmentDate: "2026-03-24T07:30:00.000Z",
    symptoms: "Fever and body pain",
    visitType: "home",
    status: "accepted",
    patientAddress: "Whitefield, Bengaluru",
    patientLatitude: 12.9694,
    patientLongitude: 77.7502,
    amount: 600,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1003",
    paymentStatus: "paid",
    payoutProcessed: false
  },
  {
    patientEmail: "patient4@example.com",
    doctorEmail: "doctor3@example.com",
    specialtyName: "Cardiology",
    appointmentDate: "2026-03-25T11:00:00.000Z",
    symptoms: "Follow-up for chest discomfort review",
    visitType: "clinic",
    status: "pending",
    patientAddress: "Jayanagar, Bengaluru",
    patientLatitude: 12.9263,
    patientLongitude: 77.5929,
    amount: 900,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1004",
    paymentStatus: "paid",
    payoutProcessed: false
  },
  {
    patientEmail: "patient5@example.com",
    doctorEmail: "doctor8@example.com",
    specialtyName: "Pediatrics",
    appointmentDate: "2026-03-20T09:15:00.000Z",
    symptoms: "Child fever and cough",
    visitType: "home",
    status: "completed",
    patientAddress: "Koramangala, Bengaluru",
    patientLatitude: 12.9349,
    patientLongitude: 77.6205,
    amount: 620,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1005",
    paymentStatus: "paid",
    review: {
      rating: 5,
      comment: "Gentle with the child and gave clear advice."
    },
    payoutProcessed: true
  },
  {
    patientEmail: "patient@example.com",
    doctorEmail: "doctor7@example.com",
    specialtyName: "General Physician",
    appointmentDate: "2026-03-18T12:30:00.000Z",
    symptoms: "Routine health check and BP review",
    visitType: "clinic",
    status: "completed",
    patientAddress: "Indiranagar, Bengaluru",
    patientLatitude: 12.9719,
    patientLongitude: 77.6412,
    amount: 780,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1006",
    paymentStatus: "paid",
    review: {
      rating: 4,
      comment: "Professional and on time."
    },
    payoutProcessed: false
  },
  {
    patientEmail: "patient2@example.com",
    doctorEmail: "doctor10@example.com",
    specialtyName: "Dermatology",
    appointmentDate: "2026-03-26T14:00:00.000Z",
    symptoms: "Acne and skin irritation",
    visitType: "clinic",
    status: "accepted",
    patientAddress: "HSR Layout, Bengaluru",
    patientLatitude: 12.9118,
    patientLongitude: 77.6477,
    amount: 580,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1007",
    paymentStatus: "paid",
    payoutProcessed: false
  },
  {
    patientEmail: "patient3@example.com",
    doctorEmail: "doctor9@example.com",
    specialtyName: "Cardiology",
    appointmentDate: "2026-03-17T08:00:00.000Z",
    symptoms: "BP monitoring and medication review",
    visitType: "home",
    status: "completed",
    patientAddress: "Whitefield, Bengaluru",
    patientLatitude: 12.9694,
    patientLongitude: 77.7502,
    amount: 980,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1008",
    paymentStatus: "paid",
    review: {
      rating: 5,
      comment: "Detailed explanation and good follow-up guidance."
    },
    payoutProcessed: true
  },
  {
    patientEmail: "patient4@example.com",
    doctorEmail: "doctor6@example.com",
    specialtyName: "Diabetology",
    appointmentDate: "2026-03-19T16:45:00.000Z",
    symptoms: "Diabetes diet and medication review",
    visitType: "home",
    status: "completed",
    patientAddress: "Jayanagar, Bengaluru",
    patientLatitude: 12.9263,
    patientLongitude: 77.5929,
    amount: 820,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1009",
    paymentStatus: "paid",
    review: {
      rating: 4,
      comment: "Good consultation, practical suggestions."
    },
    payoutProcessed: true
  },
  {
    patientEmail: "patient5@example.com",
    doctorEmail: "doctor5@example.com",
    specialtyName: "Pediatrics",
    appointmentDate: "2026-03-27T10:30:00.000Z",
    symptoms: "Vaccination follow-up visit",
    visitType: "home",
    status: "pending",
    patientAddress: "Koramangala, Bengaluru",
    patientLatitude: 12.9349,
    patientLongitude: 77.6205,
    amount: 750,
    paymentGateway: "mock",
    gatewayTransactionId: "MOCK-DEMO-1010",
    paymentStatus: "paid",
    payoutProcessed: false
  }
];

const seedDemoOperations = async ({
  Appointment,
  Payment,
  Payout,
  Review,
  Specialty,
  User
}) => {
  const [users, specialties] = await Promise.all([
    User.findAll(),
    Specialty.findAll()
  ]);

  const userMap = Object.fromEntries(users.map((user) => [user.email, user]));
  const specialtyMap = Object.fromEntries(
    specialties.map((specialty) => [specialty.name, specialty])
  );

  for (const item of demoAppointments) {
    const patient = userMap[item.patientEmail];
    const doctor = userMap[item.doctorEmail];
    const specialty = specialtyMap[item.specialtyName];

    if (!patient || !doctor || !specialty) {
      continue;
    }

    const [appointment] = await Appointment.findOrCreate({
      where: {
        patientId: patient.id,
        doctorId: doctor.id,
        appointmentDate: item.appointmentDate
      },
      defaults: {
        patientId: patient.id,
        doctorId: doctor.id,
        specialtyId: specialty.id,
        appointmentDate: item.appointmentDate,
        symptoms: item.symptoms,
        visitType: item.visitType,
        status: item.status,
        patientAddress: item.patientAddress,
        patientLatitude: item.patientLatitude,
        patientLongitude: item.patientLongitude,
        amount: item.amount
      }
    });

    if (appointment.status !== item.status) {
      appointment.status = item.status;
      await appointment.save();
    }

    const commissionAmount = Number(((Number(item.amount) * 15) / 100).toFixed(2));
    const doctorShareAmount = Number((Number(item.amount) - commissionAmount).toFixed(2));

    const [payment] = await Payment.findOrCreate({
      where: { appointmentId: appointment.id },
      defaults: {
        appointmentId: appointment.id,
        patientId: patient.id,
        doctorId: doctor.id,
        paymentGateway: item.paymentGateway,
        gatewayTransactionId: item.gatewayTransactionId,
        amount: item.amount,
        commissionAmount,
        doctorShareAmount,
        status: item.paymentStatus
      }
    });

    if (item.review) {
      await Review.findOrCreate({
        where: { appointmentId: appointment.id },
        defaults: {
          appointmentId: appointment.id,
          patientId: patient.id,
          doctorId: doctor.id,
          rating: item.review.rating,
          comment: item.review.comment
        }
      });
    }

    if (item.payoutProcessed) {
      await Payout.findOrCreate({
        where: { paymentId: payment.id },
        defaults: {
          doctorId: doctor.id,
          paymentId: payment.id,
          grossAmount: item.amount,
          commissionAmount,
          payoutAmount: doctorShareAmount,
          status: "processed"
        }
      });
    }
  }
};

export default {
  name: "004-demo-operations",
  run: seedDemoOperations
};
