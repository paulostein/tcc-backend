const controller = require('../../controllers/post');

module.exports = (router) => {
    router.get('/post', async (req, res) => {
        const { code, ...data } = await controller.findAll();
        res.status(code).send(data);
    });
};
