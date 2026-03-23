import {
  isCoordinate,
  isEmail,
  isFutureDate,
  isNonEmptyString,
  isNumberInRange,
  isPhone,
  isPositiveNumber
} from "../utils/validators.js";

export const patientRegistrationRules = [
  { field: "fullName", required: true, validate: isNonEmptyString },
  { field: "email", required: true, validate: isEmail, message: "email must be valid" },
  { field: "phone", required: true, validate: isPhone, message: "phone must be 10 to 15 digits" },
  { field: "password", required: true, validate: (value) => String(value).length >= 6, message: "password must be at least 6 characters" },
  { field: "address", required: true, validate: isNonEmptyString },
  { field: "latitude", required: true, validate: (value) => isCoordinate(value, -90, 90), message: "latitude must be between -90 and 90" },
  { field: "longitude", required: true, validate: (value) => isCoordinate(value, -180, 180), message: "longitude must be between -180 and 180" }
];

export const doctorRegistrationRules = [
  { field: "fullName", required: true, validate: isNonEmptyString },
  { field: "email", required: true, validate: isEmail, message: "email must be valid" },
  { field: "phone", required: true, validate: isPhone, message: "phone must be 10 to 15 digits" },
  { field: "password", required: true, validate: (value) => String(value).length >= 6, message: "password must be at least 6 characters" },
  { field: "registrationNumber", required: true, validate: isNonEmptyString },
  { field: "experienceYears", required: true, validate: (value) => isNumberInRange(value, 0, 60), message: "experienceYears must be between 0 and 60" },
  { field: "consultationFee", required: true, validate: isPositiveNumber, message: "consultationFee must be greater than 0" },
  { field: "clinicAddress", required: true, validate: isNonEmptyString },
  { field: "latitude", required: true, validate: (value) => isCoordinate(value, -90, 90), message: "latitude must be between -90 and 90" },
  { field: "longitude", required: true, validate: (value) => isCoordinate(value, -180, 180), message: "longitude must be between -180 and 180" },
  { field: "serviceRadiusKm", required: true, validate: (value) => isNumberInRange(value, 1, 200), message: "serviceRadiusKm must be between 1 and 200" },
  {
    field: "specialtyIds",
    required: true,
    validate: (value) => Array.isArray(value) && value.length > 0 && value.every((item) => Number.isInteger(Number(item)) && Number(item) > 0),
    message: "specialtyIds must be a non-empty array of ids"
  }
];

export const loginRules = [
  { field: "email", required: true, validate: isEmail, message: "email must be valid" },
  { field: "password", required: true, validate: isNonEmptyString }
];

export const bookAppointmentRules = [
  { field: "doctorId", required: true, validate: isPositiveNumber, message: "doctorId must be a positive number" },
  { field: "specialtyId", required: true, validate: isPositiveNumber, message: "specialtyId must be a positive number" },
  { field: "appointmentDate", required: true, validate: isFutureDate, message: "appointmentDate must be in the future" },
  { field: "visitType", required: true, validate: (value) => ["home", "clinic"].includes(value), message: "visitType must be home or clinic" },
  { field: "patientAddress", required: true, validate: isNonEmptyString },
  { field: "patientLatitude", required: true, validate: (value) => isCoordinate(value, -90, 90), message: "patientLatitude must be between -90 and 90" },
  { field: "patientLongitude", required: true, validate: (value) => isCoordinate(value, -180, 180), message: "patientLongitude must be between -180 and 180" }
];

export const createPaymentRules = [
  { field: "appointmentId", required: true, validate: isPositiveNumber, message: "appointmentId must be a positive number" },
  { field: "paymentGateway", required: false, validate: isNonEmptyString },
  { field: "gatewayTransactionId", required: false, validate: isNonEmptyString }
];

export const createReviewRules = [
  { field: "appointmentId", required: true, validate: isPositiveNumber, message: "appointmentId must be a positive number" },
  { field: "rating", required: true, validate: (value) => isNumberInRange(value, 1, 5), message: "rating must be between 1 and 5" },
  { field: "comment", required: false, validate: (value) => String(value).trim().length <= 1000, message: "comment must be 1000 characters or fewer" }
];

export const appointmentStatusRules = [
  { field: "appointmentId", from: "params", required: true, validate: isPositiveNumber, message: "appointmentId must be a positive number" },
  { field: "status", required: true, validate: (value) => ["accepted", "rejected", "completed"].includes(value), message: "status must be accepted, rejected, or completed" }
];

export const doctorApprovalRules = [
  { field: "doctorId", from: "params", required: true, validate: isPositiveNumber, message: "doctorId must be a positive number" },
  { field: "approvalStatus", required: true, validate: (value) => ["approved", "rejected"].includes(value), message: "approvalStatus must be approved or rejected" }
];

export const payoutRules = [
  { field: "paymentId", required: true, validate: isPositiveNumber, message: "paymentId must be a positive number" }
];
