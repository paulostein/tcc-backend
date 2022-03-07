const { celebrate, Segments, Joi } = require('celebrate');

module.exports = class PostValidator {
    static post() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required().min(2).max(20),
                text: Joi.string().required().min(2).max(200),
                attachment: Joi.string().required().min(3).max(30),
            }),
        });
    }

    static Id() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number(),
            }),
        });
    }
};
