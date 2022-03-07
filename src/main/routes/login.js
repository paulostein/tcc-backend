const controller = require('../../controllers/login');

module.exports = (router) => {
    router.post('/login', async (req, res) => {
        const { code, ...data } = await controller.login(req.body);
        res.status(code).send(data);
    });
};
