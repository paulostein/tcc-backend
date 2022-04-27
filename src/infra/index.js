const typeorm = require('typeorm');
require('dotenv').config();

module.exports = {
    db: {
        entityName: '',

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

        async getRepository() {
            const connection = await this.getConnection();
            return connection.getRepository(this.entityName);
        },

        async findAll(options = {}) {
            const repository = await this.getRepository();
            return repository.find(options);
        },

        async save(data) {
            const repository = await this.getRepository();
            return repository.save(data);
        },

        async findByCriteria(criteria) {
            const repository = await this.getRepository();
            return repository.findOne(criteria);
        },

        async deleteById(id) {
            const repository = await this.getRepository();
            await repository.delete(id);
        },

        async update(data) {
            const repository = await this.getRepository();
            return repository.update(data.id, data.body);
        },
    },
};
