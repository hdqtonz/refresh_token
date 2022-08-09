import UserToken from "../models/userToken.js";
import jwt from "jsonwebtoken";

const verifyRefreshToken = (refreshToken) => {
  const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

  return new Promise((resolve, reject) => {
    UserToken.findOne({ token: refreshToken }, (err, data) => {
      if (!data) {
        return reject({ error: true, message: "Invalide Refresh Token" });
      }
      jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        if (err) {
          return reject({ error: true, message: "Invalide Refresh Token" });
        }
        resolve({
          tokenDetails,
          error: false,
          message: "Valid refresh token",
        });
      });
    });
  });
};

export default verifyRefreshToken;
