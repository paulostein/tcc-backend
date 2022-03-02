const repository = require('../repositories/area');

class AreaController {
    async findAll() {
        return repository.findAll;
    }

    async findById(id) {
        return repository.findById(id);
    }

    async save(area) {
        return repository.save(area);
    }
}

module.exports = new AreaController();
