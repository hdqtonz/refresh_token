import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      error: true,
      message: "Access Denied: No token Provided",
    });
  }
  try {
    const tokenDetails = jwt.verify(token, process.env.ASSES_TOKEN_PRIVATE_KEY);
    req.user = tokenDetails;
    next();
  } catch (e) {
    res.status(403).json({
      error: true,
      message: "Access Denied: No token Provided",
    });
  }
};

export default auth;
