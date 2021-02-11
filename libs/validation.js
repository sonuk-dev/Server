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

validator.gameValidator = {
    validate: {
        type: "json",
        body: {
            userId: Joi.string()
                .required(),
            date: Joi.date()
                .required(),
            score: Joi.number()
                .required()
        }
    }
};

validator.changeBestScoreValidator = {
    validate: {
        type: "json",
        body: {
            _id: Joi.string()
                .required(),
            bestScore: Joi.number()
                .min(0)
                .required()
        }
    }
};

validator.updateUserValidator = {
    validate: {
        type: "json",
        body: {
            _id: Joi.string()
                .required(),
            nickname: Joi.string()
                .required(),
            email: Joi.string()
                .email()
                .required()
        }
    }
};
module.exports = validator;