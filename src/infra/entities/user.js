const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'varchar',
        },
        email: {
            type: 'varchar',
        },
        password: {
            type: 'varchar',
        },
    },
    relations: {
        posts: {
            target: 'Post',
            type: 'one-to-many',
            joinTable: true,
            cascade: true,
        },
        area: {
            target: 'Area',
            type: 'many-to-one',
            joinTable: true,
            cascade: true,
        },
    },
});
