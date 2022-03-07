const controller = require('../../controllers/login');
const Validators = require('../validators/login');

module.exports = (router) => {
    router.post('/login', Validators.post(), async (req, res) => {
        const { code, ...data } = await controller.login(req.body);
        res.status(code).send(data);
    });
};
