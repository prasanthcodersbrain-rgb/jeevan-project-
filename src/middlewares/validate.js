export const validate = (rules) => (req, res, next) => {
  const errors = [];

  for (const rule of rules) {
    const value = rule.from === "params" ? req.params[rule.field] : req.body[rule.field];

    if (rule.required && (value === undefined || value === null || value === "")) {
      errors.push(`${rule.label || rule.field} is required`);
      continue;
    }

    if ((value === undefined || value === null || value === "") && !rule.required) {
      continue;
    }

    if (rule.validate && !rule.validate(value, req)) {
      errors.push(rule.message || `${rule.label || rule.field} is invalid`);
    }
  }

  if (errors.length) {
    return res.status(400).json({ message: "Validation failed", errors });
  }

  next();
};
