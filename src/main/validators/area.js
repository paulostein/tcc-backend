const { celebrate, Segments, Joi } = require('celebrate');

module.exports = class AreaValidator {
    static post() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required().min(2).max(20),
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
