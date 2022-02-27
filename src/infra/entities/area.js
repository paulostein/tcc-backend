const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: 'Area',
    tableName: 'areas',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'varchar',
        },
    },
});
