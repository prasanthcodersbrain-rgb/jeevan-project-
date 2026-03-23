const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

const isEmail = (value) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const isPhone = (value) =>
  typeof value === "string" && /^[0-9]{10,15}$/.test(value.trim());

const isPositiveNumber = (value) => Number.isFinite(Number(value)) && Number(value) > 0;

const isNumberInRange = (value, min, max) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= min && parsed <= max;
};

const isCoordinate = (value, min, max) => isNumberInRange(value, min, max);

const isFutureDate = (value) => {
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.getTime() > Date.now();
};

export {
  isCoordinate,
  isEmail,
  isFutureDate,
  isNonEmptyString,
  isNumberInRange,
  isPhone,
  isPositiveNumber
};
