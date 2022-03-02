const { db } = require('../infra');
db.entityName = 'Area';
class AreaRepository {
    async findAll() {
        this.setEntityName();
        const areas = await db.findAll();
        return areas;
    }

    async findById(id) {
        this.setEntityName();
        const area = await db.findById(id);
        return area;
    }

    async save(area) {
        this.setEntityName();
        return db.save(area);
    }

    setEntityName() {
        db.entityName = 'Area';
    }
}

module.exports = new AreaRepository();
