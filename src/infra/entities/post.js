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
        attachmentType: {
            type: 'varchar',
        },
        createAt: {
            createDate: true,
            type: 'timestamptz',
            default: () => "now() AT TIME ZONE 'America/Sao_Paulo'",
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
