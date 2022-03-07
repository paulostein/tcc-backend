const controller = require('../../controllers/area');
const Validators = require('../validators/area');

module.exports = (router) => {
    router.get('/area', async (req, res) => {
        const { code, ...data } = await controller.findAll();
        res.status(code).send(data);
    });

    router.post('/area', Validators.post(), async (req, res) => {
        const { code, ...data } = await controller.save(req.body);
        res.status(code).send(data);
    });

    router.get('/area/:id', Validators.id(), async (req, res) => {
        const { code, ...data } = await controller.findByCriteria({ id: req.params.id });
        res.status(code).send(data);
    });

    router.delete('/post/:id', Validators.id(), async (req, res) => {
        const { code, ...data } = await controller.deleteById({ id: req.params.id });
        res.status(code).send(data);
    });
};
