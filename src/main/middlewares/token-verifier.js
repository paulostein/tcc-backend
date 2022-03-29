const jwt = require('jsonwebtoken');
const { unauthorized, serverError } = require('../../helpers/http');
require('dotenv').config();

const validateToken = (token) => jwt.verify(token, process.env.JWT_SECRET_KEY);

const validateHeaders = (headers) => {
    const { authorization } = headers;
    if (!authorization) {
        throw new Error('authorization token not provided');
    }
};

const extractToken = (headers) => {
    const { authorization } = headers;
    return authorization.replace('Bearer ', '');
};

module.exports = (req, res, next) => {
    try {
        const { headers, path } = req;
        if (path.includes('login')) {
            return next();
        }
        validateHeaders(headers);
        validateToken(extractToken(headers));
        next();
    } catch (error) {
        tokenErrors = [
            'jwt expired',
            'authorization token not provided',
            'jwt malformed',
            'invalid signature',
        ];

        if (tokenErrors.includes(error.message)) {
            const { code, ...data } = unauthorized();
            res.status(code).send(data);
        } else {
            const { code, ...data } = serverError();
            res.status(code).send(data);
        }
    }
};
