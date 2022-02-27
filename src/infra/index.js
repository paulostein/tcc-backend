const typeorm = require('typeorm');
require('dotenv').config();

module.exports = {
    db: {
        async getConnection() {
            if (!this.connection) {
                this.connection = await typeorm.createConnection({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                    synchronize: true,
                    entities: [
                        require('./entities/user'),
                        require('./entities/post'),
                        require('./entities/area'),
                    ],
                });
            }

            return this.connection;
        },

        async getRepository(entityName) {
            const connection = await this.getConnection();
            return connection.getRepository(entityName);
        },
    },
};
