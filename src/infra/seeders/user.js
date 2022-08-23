const { db } = require('..');

(async () => {
    const users = [
        {
            name: 'Paulo Stein',
            email: 'email@email.com',
            password: '12345678',
        },
    ];
    await db.save('User', users);
})();
