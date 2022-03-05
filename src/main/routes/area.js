const controller = require('../../controllers/area');

module.exports = (router) => {
    router.get('/area', async (req, res) => {
        const areas = await controller.findAll('Area');
        res.send(areas);
    });

    router.post('/area', async (req, res) => {
        const area = await controller.save(req.body);
        res.send(area);
    });

    router.get('/area/:id', async (req, res) => {
        const area = await controller.findByCriteria({ id: req.params.id });
        res.send(area);
    });
};
