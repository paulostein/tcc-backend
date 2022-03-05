const controller = require('../../controllers/user');
const Validators = require('../validators/user');

module.exports = (router) => {
    router.get('/user', async (req, res) => {
        const users = await controller.findAll();
        res.send(users);
    });

    router.post('/user', Validators.post(), async (req, res) => {
        const user = await controller.save(req.body);
        res.send(user);
    });

    router.get('/user/:id', async (req, res) => {
        const user = await controller.findByCriteria({ id: req.params.id });
        res.send(user);
    });
};
