const { db } = require('..');

(async () => {
    const users = [
        {
            name: 'paulo',
            email: 'email@email.com',
            password: '1234',
        },
    ];
    await db.save('User', users);
})();
