const defaultSpecialties = [
  { name: "Diabetology", description: "Diabetes and sugar management" },
  { name: "Dermatology", description: "Skin and hair treatment" },
  { name: "Cardiology", description: "Heart specialist" },
  { name: "General Physician", description: "General health consultation" },
  { name: "Pediatrics", description: "Child health care" }
];

const seedSpecialties = async ({ Specialty }) => {
  for (const specialty of defaultSpecialties) {
    await Specialty.findOrCreate({
      where: { name: specialty.name },
      defaults: specialty
    });
  }
};

export default {
  name: "001-specialties",
  run: seedSpecialties
};
