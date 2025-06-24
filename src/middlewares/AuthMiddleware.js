const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token não fornecido!" });
  }

  return next();
};

module.exports = verifyToken;
