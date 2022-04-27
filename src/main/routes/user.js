const controller = require('../../controllers/user');
const Validators = require('../validators/user');

module.exports = (router) => {
    router.get('/user', async (req, res) => {
        const { code, ...data } = await controller.findAll();
        res.status(code).send(data);
    });

    router.post('/user', Validators.post(), async (req, res) => {
        const { code, ...data } = await controller.save(req.body);
        res.status(code).send(data);
    });

    router.get('/user/:id', Validators.id(), async (req, res) => {
        const { code, ...data } = await controller.findByCriteria({
            id: req.params.id,
        });
        res.status(code).send(data);
    });

    router.delete('/user/:id', Validators.id(), async (req, res) => {
        const { code, ...data } = await controller.deleteById({
            id: req.params.id,
        });
        res.status(code).send(data);
    });

    router.put('/user/:id', Validators.id(), async (req, res) => {
        const { code, ...data } = await controller.update({
            id: req.params.id,
            body: req.body,
        });
        res.status(code).send(data);
    });
};
