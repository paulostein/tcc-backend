const { db } = require('../../infra');

module.exports = (router) => {
    router.get('/post', async (req, res) => {
        const posts = await db.findAll('Post');

        res.send(posts);
    });
};
