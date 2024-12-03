const joi = require('joi');

const email = joi.string().email();
const password = joi.string().min(8).max(32);

const loginSchema = joi.object({
  email: email.required(),
  password: password.required(),
});

module.exports = {
  loginSchema,
}