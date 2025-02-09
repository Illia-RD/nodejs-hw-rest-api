const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'missing required name field !!',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field !!',
  }),
  phone: Joi.string().min(6).required().messages({
    'any.required': 'missing required phone field !!',
  }),
});

const putContactSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  phone: Joi.string().min(6),
})
  .min(1)
  .messages({
    'object.min': 'missing fields !!',
  });

module.exports = {
  addContactSchema,
  putContactSchema,
};
