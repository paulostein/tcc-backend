const { db } = require('../infra');

class AreaRepository {
    async findAll() {
        this.setEntityName();
        const areas = await db.findAll();
        return areas;
    }

    async findByCriteria(criteria) {
        this.setEntityName();
        const area = await db.findByCriteria(criteria);
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
