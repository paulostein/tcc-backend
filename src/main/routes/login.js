const controller = require('../../controllers/login');

module.exports = (router) => {
    router.post('/login', async (req, res) => {
        const login = await controller.login(req.body);
        res.send(login);
    });
};
