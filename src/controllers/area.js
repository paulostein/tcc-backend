const repository = require('../repositories/area');

class AreaController {
    async findAll() {
        return repository.findAll;
    }

    async findByCriteria(criteria) {
        return repository.findByCriteria(criteria);
    }

    async save(area) {
        return repository.save(area);
    }
}

module.exports = new AreaController();
