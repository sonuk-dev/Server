const Joi = require('joi');
let validator = {};

validator.loginValidator = {
    validate: {
        type: "json",
        body: {
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .min(6)
                .required()
        }
    }
};

validator.registrationValidator = {
    validate: {
        type: "json",
        body: {
            nickname: Joi.string()
                .required(),
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .min(6)
                .required()
        }
    }
};
module.exports = validator;