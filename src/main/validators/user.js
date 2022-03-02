const { celebrate, Segments, Joi } = require('celebrate');

module.exports = class UserValidator {
    static post() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required().min(3).max(100),
                email: Joi.string().required().max(100).regex(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i),
                password: Joi.string().required().min(8),
            }),
        });
    }
};
