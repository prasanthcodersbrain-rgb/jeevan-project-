# Health Booking System Backend

This project is a backend API for a health booking system built with:

- `MySQL` or `SQLite` for local development
- `Express.js`
- `Node.js`

It supports three portals:

- `Patient`: register/login, find nearby doctors, book appointments, pay, review doctors
- `Doctor`: manage appointments, accept/reject bookings, view patient location for home visits
- `Admin`: onboard doctors, approve/reject registrations, monitor reviews, release payouts after commission

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT authentication

## Core Features Included

- Role-based authentication for `patient`, `doctor`, and `admin`
- Doctor onboarding with approval workflow
- Specialty-based and nearby doctor discovery
- Appointment booking with home-visit location
- Payment record creation with platform commission
- Doctor accept/reject appointment actions
- Review system after appointments
- Admin payout management

## Project Structure

```text
src/
  config/
  controllers/
  middlewares/
  models/
  routes/
  seeders/
  services/
  utils/
sql/
```

## Backend Architecture

The backend follows an MVC-style structure:

- `models/` contains Sequelize data models
- `controllers/` handles request/response logic
- `routes/` maps endpoints to controllers
- `services/` contains non-controller business logic
- `seeders/` contains reusable seed modules for demo/bootstrap data

## Seeders

Run seeders manually with:

```bash
npm run seed
```

The seeders create:

- default specialties
- admin user
- multiple demo patients
- multiple approved demo doctors
- demo appointments, payments, reviews, and payouts

Demo credentials:

- Admin: `admin@example.com` / `admin123`
- Patients: `patient@example.com`, `patient2@example.com`, `patient3@example.com`, `patient4@example.com`, `patient5@example.com` with password `patient123`
- Doctors: `doctor1@example.com` through `doctor10@example.com` with password `doctor123`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy env file:

```bash
cp .env.example .env
```

3. Create a MySQL database named `health_booking`

4. Run seeders if you want demo data:

```bash
npm run seed
```

5. Start the backend server:

```bash
npm run dev
```

If `ADMIN_EMAIL` and `ADMIN_PASSWORD` are present in `.env`, the app will auto-create the first admin account on startup.

## Suggested API Flow

### Patient

1. Register as patient
2. Share or enter current latitude and longitude
3. Get nearby doctors with specialty filter
4. Book appointment with a selected doctor
5. Complete payment
6. Add review after consultation

### Doctor

1. Register as doctor
2. Wait for admin approval
3. View appointment requests
4. Accept or reject appointments
5. Use patient coordinates to reach home location

### Admin

1. Review new doctor registrations
2. Approve or reject doctors
3. Monitor appointments and payments
4. Release payouts after deducting commission

## Important Notes

- Payment gateway is mocked at backend record level for now. You can connect Razorpay, Stripe, or PhonePe later.
- Nearby doctor search uses latitude/longitude and a backend distance calculation.
- For production, add validation, rate limiting, logging, and file upload for doctor KYC documents.

## Main Endpoints

### Auth

- `POST /api/auth/register/patient`
- `POST /api/auth/register/doctor`
- `POST /api/auth/login`

### Patient

- `GET /api/specialties`
- `GET /api/patient/doctors/nearby`
- `POST /api/patient/appointments`
- `POST /api/patient/payments`
- `POST /api/patient/reviews`

### Doctor

- `GET /api/doctor/appointments`
- `GET /api/doctor/earnings`
- `PATCH /api/doctor/appointments/:appointmentId/status`

### Admin

- `GET /api/admin/doctors/pending`
- `PATCH /api/admin/doctors/:doctorId/approval`
- `GET /api/admin/dashboard`
- `POST /api/admin/payouts`

## Database Help

Use the SQL files in [sql/schema.sql](/home/codersbrain-2/Documents/jeevan/sql/schema.sql) and [sql/seed.sql](/home/codersbrain-2/Documents/jeevan/sql/seed.sql) if you want a manual SQL setup alongside Sequelize.
