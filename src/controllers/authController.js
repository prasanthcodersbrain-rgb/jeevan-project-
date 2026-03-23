import { Op } from "sequelize";
import {
  User,
  PatientProfile,
  DoctorProfile,
  Specialty
} from "../models/index.js";
import generateToken from "../utils/generateToken.js";

export const registerPatient = async (req, res, next) => {
  try {
    const { fullName, email, phone, password, address, latitude, longitude } = req.body;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { phone }]
      }
    });

    if (existingUser) {
      return res.status(409).json({ message: "An account with this email or phone already exists" });
    }

    const user = await User.create({
      fullName,
      email,
      phone,
      passwordHash: password,
      role: "patient"
    });

    await PatientProfile.create({
      userId: user.id,
      address,
      latitude,
      longitude
    });

    res.status(201).json({
      message: "Patient registered successfully",
      token: generateToken(user)
    });
  } catch (error) {
    next(error);
  }
};

export const registerDoctor = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phone,
      password,
      registrationNumber,
      experienceYears,
      consultationFee,
      bio,
      clinicAddress,
      latitude,
      longitude,
      serviceRadiusKm,
      specialtyIds = []
    } = req.body;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { phone }]
      }
    });

    if (existingUser) {
      return res.status(409).json({ message: "An account with this email or phone already exists" });
    }

    const existingDoctorProfile = await DoctorProfile.findOne({
      where: { registrationNumber }
    });

    if (existingDoctorProfile) {
      return res.status(409).json({ message: "This registration number is already registered" });
    }

    const user = await User.create({
      fullName,
      email,
      phone,
      passwordHash: password,
      role: "doctor"
    });

    const doctorProfile = await DoctorProfile.create({
      userId: user.id,
      registrationNumber,
      experienceYears,
      consultationFee,
      bio,
      clinicAddress,
      latitude,
      longitude,
      serviceRadiusKm
    });

    if (specialtyIds.length) {
      const specialties = await Specialty.findAll({ where: { id: specialtyIds } });

      if (specialties.length !== specialtyIds.length) {
        return res.status(400).json({ message: "One or more specialty ids are invalid" });
      }

      await doctorProfile.setSpecialties(specialties);
    }

    res.status(201).json({
      message: "Doctor registered successfully and is pending admin approval",
      token: generateToken(user)
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      message: "Login successful",
      token: generateToken(user),
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};
