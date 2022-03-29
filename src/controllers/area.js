const repository = require('../repositories/area');
const { success, created, deleted } = require('../helpers/http');

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

    async deleteById(id) {
        const areaFound = await repository.findByCriteria(id);

        if (!areaFound) {
            return badRequest('Area not exists');
        }
        await repository.deleteById(id);
        return deleted();
    }
}

module.exports = new AreaController();
