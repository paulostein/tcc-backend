const { db } = require('../infra');

module.exports = (router) => {
    router.get('/area', async (req, res) => {
        const repository = await db.getRepository('Area');
        const areas = await repository.find();

        res.send(areas);
    });
};
