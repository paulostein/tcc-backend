const badRequest = (message) => ({
    code: 400,
    message,
});
const success = (message, data) => ({
    code: 200,
    message,
    data,
});
const created = (message, data) => ({
    code: 201,
    message,
    data,
});
const deleted = () => ({
    code: 204,
});
const serverError = () => ({
    code: 500,
    message: 'Internal server error',
});
const unauthorized = () => ({
    code: 401,
    message: 'Unauthorized',
});

module.exports = {
    badRequest,
    success,
    created,
    deleted,
    serverError,
    unauthorized,
};
