const { celebrate, Segments, Joi } = require('celebrate');

module.exports = class PostValidator {
    static post() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                text: Joi.string().required().min(2).max(400),
                area: Joi.string().required(),
                user: Joi.string().required(),
            }),
        });
    }

    static id() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number(),
            }),
        });
    }
};
