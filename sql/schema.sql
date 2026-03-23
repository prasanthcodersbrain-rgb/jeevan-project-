CREATE DATABASE IF NOT EXISTS health_booking;
USE health_booking;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fullName VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL UNIQUE,
  passwordHash VARCHAR(255) NOT NULL,
  role ENUM('patient', 'doctor', 'admin') NOT NULL,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patient_profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL UNIQUE,
  address VARCHAR(255),
  latitude DECIMAL(10, 7),
  longitude DECIMAL(10, 7),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS doctor_profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL UNIQUE,
  registrationNumber VARCHAR(100) NOT NULL UNIQUE,
  experienceYears INT DEFAULT 0,
  consultationFee DECIMAL(10, 2) NOT NULL,
  bio TEXT,
  clinicAddress VARCHAR(255) NOT NULL,
  latitude DECIMAL(10, 7) NOT NULL,
  longitude DECIMAL(10, 7) NOT NULL,
  serviceRadiusKm INT DEFAULT 15,
  approvalStatus ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  isAvailable BOOLEAN DEFAULT TRUE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS specialties (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL UNIQUE,
  description VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS doctor_specialties (
  doctorProfileId INT NOT NULL,
  specialtyId INT NOT NULL,
  PRIMARY KEY (doctorProfileId, specialtyId),
  FOREIGN KEY (doctorProfileId) REFERENCES doctor_profiles(id),
  FOREIGN KEY (specialtyId) REFERENCES specialties(id)
);

CREATE TABLE IF NOT EXISTS appointments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patientId INT NOT NULL,
  doctorId INT NOT NULL,
  specialtyId INT NOT NULL,
  appointmentDate DATETIME NOT NULL,
  symptoms TEXT,
  visitType ENUM('home', 'clinic') DEFAULT 'home',
  status ENUM('pending', 'accepted', 'rejected', 'completed', 'cancelled') DEFAULT 'pending',
  patientAddress VARCHAR(255) NOT NULL,
  patientLatitude DECIMAL(10, 7) NOT NULL,
  patientLongitude DECIMAL(10, 7) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (patientId) REFERENCES users(id),
  FOREIGN KEY (doctorId) REFERENCES users(id),
  FOREIGN KEY (specialtyId) REFERENCES specialties(id)
);

CREATE TABLE IF NOT EXISTS payments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  appointmentId INT NOT NULL UNIQUE,
  patientId INT NOT NULL,
  doctorId INT NOT NULL,
  paymentGateway VARCHAR(50) DEFAULT 'mock',
  gatewayTransactionId VARCHAR(120),
  amount DECIMAL(10, 2) NOT NULL,
  commissionAmount DECIMAL(10, 2) NOT NULL,
  doctorShareAmount DECIMAL(10, 2) NOT NULL,
  status ENUM('initiated', 'paid', 'failed', 'refunded') DEFAULT 'initiated',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (appointmentId) REFERENCES appointments(id),
  FOREIGN KEY (patientId) REFERENCES users(id),
  FOREIGN KEY (doctorId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  appointmentId INT NOT NULL UNIQUE,
  patientId INT NOT NULL,
  doctorId INT NOT NULL,
  rating INT NOT NULL,
  comment TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (appointmentId) REFERENCES appointments(id),
  FOREIGN KEY (patientId) REFERENCES users(id),
  FOREIGN KEY (doctorId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS payouts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  doctorId INT NOT NULL,
  paymentId INT NOT NULL UNIQUE,
  grossAmount DECIMAL(10, 2) NOT NULL,
  commissionAmount DECIMAL(10, 2) NOT NULL,
  payoutAmount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'processed', 'failed') DEFAULT 'processed',
  paidAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (doctorId) REFERENCES users(id),
  FOREIGN KEY (paymentId) REFERENCES payments(id)
);
