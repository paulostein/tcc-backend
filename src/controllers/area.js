const repository = require('../repositories/area');
const { success, created } = require('../helpers/http');

class AreaController {
    async findAll() {
        const areas = await repository.findAll();
        return success('Found areas', areas);
    }

    async findByCriteria(criteria) {
        const area = await repository.findByCriteria(criteria);
        return success('Found area', area);
    }

    async save(area) {
        const createdArea = await repository.save(area);
        return created('Area created successfully', createdArea);
    }
}

module.exports = new AreaController();
