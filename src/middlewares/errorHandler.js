export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
};

export const errorHandler = (error, req, res, next) => {
  if (error.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({
      message: error.errors?.[0]?.message || "Duplicate value not allowed"
    });
  }

  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: error.message || "Internal server error"
  });
};
