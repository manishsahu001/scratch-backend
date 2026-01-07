const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(9).required(),
});

module.exports = createUserSchema;
