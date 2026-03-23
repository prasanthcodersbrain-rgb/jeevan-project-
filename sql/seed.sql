USE health_booking;

INSERT INTO specialties (name, description)
VALUES
  ('Diabetology', 'Diabetes and sugar management'),
  ('Dermatology', 'Skin and hair treatment'),
  ('Cardiology', 'Heart specialist'),
  ('General Physician', 'General health consultation'),
  ('Pediatrics', 'Child health care'),
  ('Orthopedics', 'Bone and joint consultation'),
  ('Neurology', 'Nervous system and headache consultation'),
  ('Gynecology', 'Women health consultation'),
  ('ENT', 'Ear, nose and throat care'),
  ('Psychiatry', 'Mental health consultation')
ON DUPLICATE KEY UPDATE description = VALUES(description);
