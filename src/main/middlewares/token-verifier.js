const jwt = require('jsonwebtoken');
const { unauthorized, serverError } = require('../../helpers/http');

const validateToken = (token) => jwt.verify(token, 'cukinha');

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
        tokenErrors = ['jwt expired', 'authorization token not provided', 'jwt malformed', 'invalid signature'];

        if (tokenErrors.includes(error.message)) {
            res.send(unauthorized());
        } else {
            res.send(serverError());
        }
    }
};
