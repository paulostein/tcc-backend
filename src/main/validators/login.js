const { celebrate, Segments, Joi } = require('celebrate');

module.exports = class LoginValidator {
    static post() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                email: Joi.string().required().max(100).regex(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i),
                password: Joi.string().required().min(8),
            }),
        });
    }
};
