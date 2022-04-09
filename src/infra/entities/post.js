const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: 'Post',
    tableName: 'posts',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        text: {
            type: 'text',
        },
        attachment: {
            type: 'varchar',
        },
    },
    relations: {
        area: {
            target: 'Area',
            type: 'many-to-one',
            joinTable: true,
            cascade: true,
            onDelete: 'CASCADE',
        },
        user: {
            target: 'User',
            type: 'many-to-one',
            joinTable: true,
            cascade: true,
            onDelete: 'CASCADE',
        },
    },
});
