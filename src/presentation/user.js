const { db } = require('../infra');

module.exports = (router) => {
    router.get('/user', async (req, res) => {
        const repository = await db.getRepository('User');
        const users = await repository.find();

        res.send(users);
    });
};
