import joi from "joi";
import PasswordComplexity from "joi-password-complexity";

//---Sign Up Body Validation---//
const signUpBodyValidation = (body) => {
  const Schema = joi.object({
    userName: joi.string().required().label("User Name"),
    email: joi.string().email().required().label("Email"),
    password: PasswordComplexity().required().label("Password"),
  });
  return Schema.validate(body);
};

//---Login Body Validation---//
const loginBodyValidation = (body) => {
  const Schema = joi.object({
    email: joi.string().required().label("Email"),
    password: PasswordComplexity().required().label("Password"),
  });
  return Schema.validate(body);
};

//---Refresh Token Body Validation---//
const refreshTokenBodyValidation = (body) => {
  const Schema = joi.object({
    refreshToken: joi.string().required().label("Refresh Token"),
  });
  return Schema.validate(body);
};

export {
  signUpBodyValidation,
  loginBodyValidation,
  refreshTokenBodyValidation,
};
