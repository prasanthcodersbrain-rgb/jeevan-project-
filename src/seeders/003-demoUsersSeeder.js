const demoPatients = [
  {
    fullName: "Demo Patient",
    email: "patient@example.com",
    phone: "9000000001",
    passwordHash: "patient123",
    role: "patient",
    address: "Indiranagar, Bengaluru",
    latitude: 12.9719,
    longitude: 77.6412
  },
  {
    fullName: "Rajesh Kumar",
    email: "patient2@example.com",
    phone: "9000000002",
    passwordHash: "patient123",
    role: "patient",
    address: "HustleHub Tech Park, HSR Layout, Bengaluru",
    latitude: 12.9118,
    longitude: 77.6477
  },
  {
    fullName: "Neha Verma",
    email: "patient3@example.com",
    phone: "9000000003",
    passwordHash: "patient123",
    role: "patient",
    address: "Whitefield, Bengaluru",
    latitude: 12.9694,
    longitude: 77.7502
  },
  {
    fullName: "Amit Joshi",
    email: "patient4@example.com",
    phone: "9000000004",
    passwordHash: "patient123",
    role: "patient",
    address: "Jayanagar, Bengaluru",
    latitude: 12.9263,
    longitude: 77.5929
  },
  {
    fullName: "Pooja Nair",
    email: "patient5@example.com",
    phone: "9000000005",
    passwordHash: "patient123",
    role: "patient",
    address: "Koramangala, Bengaluru",
    latitude: 12.9349,
    longitude: 77.6205
  }
];

const demoDoctors = [
  {
    fullName: "Dr. Ananya Sharma",
    email: "doctor1@example.com",
    phone: "9000000011",
    passwordHash: "doctor123",
    registrationNumber: "KMC1001",
    experienceYears: 8,
    consultationFee: 700,
    bio: "Experienced diabetology consultant for home care visits.",
    clinicAddress: "Indiranagar 100 Feet Road, Bengaluru",
    latitude: 12.9784,
    longitude: 77.6408,
    serviceRadiusKm: 18,
    specialtyNames: ["Diabetology", "General Physician"]
  },
  {
    fullName: "Dr. Rohan Mehta",
    email: "doctor2@example.com",
    phone: "9000000012",
    passwordHash: "doctor123",
    registrationNumber: "KMC1002",
    experienceYears: 6,
    consultationFee: 650,
    bio: "Dermatology specialist focused on skin consultations and follow-up care.",
    clinicAddress: "Koramangala 5th Block, Bengaluru",
    latitude: 12.9352,
    longitude: 77.6245,
    serviceRadiusKm: 20,
    specialtyNames: ["Dermatology"]
  },
  {
    fullName: "Dr. Vivek Iyer",
    email: "doctor3@example.com",
    phone: "9000000013",
    passwordHash: "doctor123",
    registrationNumber: "KMC1003",
    experienceYears: 12,
    consultationFee: 900,
    bio: "Cardiology home-visit doctor with chronic care management experience.",
    clinicAddress: "Jayanagar 4th Block, Bengaluru",
    latitude: 12.925,
    longitude: 77.5938,
    serviceRadiusKm: 25,
    specialtyNames: ["Cardiology"]
  },
  {
    fullName: "Dr. Sneha Kapoor",
    email: "doctor4@example.com",
    phone: "9000000014",
    passwordHash: "doctor123",
    registrationNumber: "KMC1004",
    experienceYears: 9,
    consultationFee: 600,
    bio: "General physician handling fever, infection, and routine home consultations.",
    clinicAddress: "Whitefield Main Road, Bengaluru",
    latitude: 12.9698,
    longitude: 77.7499,
    serviceRadiusKm: 22,
    specialtyNames: ["General Physician"]
  },
  {
    fullName: "Dr. Arjun Nair",
    email: "doctor5@example.com",
    phone: "9000000015",
    passwordHash: "doctor123",
    registrationNumber: "KMC1005",
    experienceYears: 7,
    consultationFee: 750,
    bio: "Pediatrics specialist for home visits and child follow-up care.",
    clinicAddress: "HSR Layout Sector 2, Bengaluru",
    latitude: 12.9116,
    longitude: 77.6474,
    serviceRadiusKm: 18,
    specialtyNames: ["Pediatrics"]
  },
  {
    fullName: "Dr. Priya Desai",
    email: "doctor6@example.com",
    phone: "9000000016",
    passwordHash: "doctor123",
    registrationNumber: "KMC1006",
    experienceYears: 10,
    consultationFee: 820,
    bio: "Multi-specialty physician supporting diabetes and general wellness plans.",
    clinicAddress: "Malleshwaram 8th Cross, Bengaluru",
    latitude: 13.0035,
    longitude: 77.5713,
    serviceRadiusKm: 20,
    specialtyNames: ["Diabetology", "General Physician"]
  },
  {
    fullName: "Dr. Karan Malhotra",
    email: "doctor7@example.com",
    phone: "9000000017",
    passwordHash: "doctor123",
    registrationNumber: "KMC1007",
    experienceYears: 11,
    consultationFee: 780,
    bio: "Family physician managing chronic conditions and home wellness visits.",
    clinicAddress: "Sarjapur Road, Bengaluru",
    latitude: 12.9077,
    longitude: 77.6835,
    serviceRadiusKm: 24,
    specialtyNames: ["General Physician", "Diabetology"]
  },
  {
    fullName: "Dr. Meera Bhat",
    email: "doctor8@example.com",
    phone: "9000000018",
    passwordHash: "doctor123",
    registrationNumber: "KMC1008",
    experienceYears: 5,
    consultationFee: 620,
    bio: "Child and adolescent care specialist for home consultation and follow up.",
    clinicAddress: "Basavanagudi, Bengaluru",
    latitude: 12.9412,
    longitude: 77.5738,
    serviceRadiusKm: 16,
    specialtyNames: ["Pediatrics"]
  },
  {
    fullName: "Dr. Farhan Ali",
    email: "doctor9@example.com",
    phone: "9000000019",
    passwordHash: "doctor123",
    registrationNumber: "KMC1009",
    experienceYears: 13,
    consultationFee: 980,
    bio: "Senior cardiology consultant handling follow-up home visits and reports review.",
    clinicAddress: "Hebbal, Bengaluru",
    latitude: 13.0358,
    longitude: 77.597,
    serviceRadiusKm: 26,
    specialtyNames: ["Cardiology"]
  },
  {
    fullName: "Dr. Isha Rao",
    email: "doctor10@example.com",
    phone: "9000000020",
    passwordHash: "doctor123",
    registrationNumber: "KMC1010",
    experienceYears: 4,
    consultationFee: 580,
    bio: "Skin and allergy specialist for follow-up home care and treatment reviews.",
    clinicAddress: "Electronic City Phase 1, Bengaluru",
    latitude: 12.8399,
    longitude: 77.677,
    serviceRadiusKm: 18,
    specialtyNames: ["Dermatology"]
  }
];

const seedDemoUsers = async ({
  DoctorProfile,
  PatientProfile,
  Specialty,
  User
}) => {
  const specialties = await Specialty.findAll();
  const specialtyMap = Object.fromEntries(specialties.map((item) => [item.name, item]));

  for (const demoPatient of demoPatients) {
    let patientUser = await User.findOne({ where: { email: demoPatient.email } });

    if (!patientUser) {
      patientUser = await User.create({
        fullName: demoPatient.fullName,
        email: demoPatient.email,
        phone: demoPatient.phone,
        passwordHash: demoPatient.passwordHash,
        role: demoPatient.role
      });
    }

    await PatientProfile.findOrCreate({
      where: { userId: patientUser.id },
      defaults: {
        userId: patientUser.id,
        address: demoPatient.address,
        latitude: demoPatient.latitude,
        longitude: demoPatient.longitude
      }
    });
  }

  for (const demoDoctor of demoDoctors) {
    let doctorUser = await User.findOne({ where: { email: demoDoctor.email } });

    if (!doctorUser) {
      doctorUser = await User.create({
        fullName: demoDoctor.fullName,
        email: demoDoctor.email,
        phone: demoDoctor.phone,
        passwordHash: demoDoctor.passwordHash,
        role: "doctor"
      });
    }

    let doctorProfile = await DoctorProfile.findOne({
      where: { userId: doctorUser.id }
    });

    if (!doctorProfile) {
      doctorProfile = await DoctorProfile.create({
        userId: doctorUser.id,
        registrationNumber: demoDoctor.registrationNumber,
        experienceYears: demoDoctor.experienceYears,
        consultationFee: demoDoctor.consultationFee,
        bio: demoDoctor.bio,
        clinicAddress: demoDoctor.clinicAddress,
        latitude: demoDoctor.latitude,
        longitude: demoDoctor.longitude,
        serviceRadiusKm: demoDoctor.serviceRadiusKm,
        approvalStatus: "approved",
        isAvailable: true
      });
    }

    const mappedSpecialties = demoDoctor.specialtyNames
      .map((name) => specialtyMap[name])
      .filter(Boolean);

    await doctorProfile.setSpecialties(mappedSpecialties);
  }
};

export default {
  name: "003-demo-users",
  run: seedDemoUsers
};
