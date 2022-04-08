const controller = require('../../controllers/post');
const Validators = require('../validators/post');

module.exports = (router) => {
    router.get('/post', async (req, res) => {
        const { code, ...data } = await controller.findAll(req.headers);
        res.status(code).send(data);
    });

    router.post('/post', Validators.post(), async (req, res) => {
        const { code, ...data } = await controller.save(req);
        res.status(code).send(data);
    });

    router.delete('/post/:id', Validators.id(), async (req, res) => {
        const { code, ...data } = await controller.deleteById({
            id: req.params.id,
        });
        res.status(code).send(data);
    });
};
