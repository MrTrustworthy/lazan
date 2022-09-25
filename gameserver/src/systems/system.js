class System {

    requiredTypes = []

    applicableEntities(entities) {
        if (this.requiredTypes.length === 0) return entities;
        return entities.filter(e => e.components.containsAllTypes(this.requiredTypes))
    }

    process(entities, data) {
        let applicableEntities = this.applicableEntities(entities)
        applicableEntities.forEach(e => this.processEntity(e, data))
    }

    processEntity(entity, data) {
        throw new NotImplementedError()
    }
}

class NotImplementedError extends Error {
}

module.exports = {System}