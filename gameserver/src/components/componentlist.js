class ComponentList {

    #list = [];

    add(component) {
        if (this.contains(component)) throw new DuplicateComponentError();
        this.#list.push(component);
    }


    getSingleType(type) {
        let components = this.#list.filter(e => e.type === type)
        if (components.length !== 1) {
            throw new ComponentNotThereError(`Component exists ${components.length} time!`);
        }
        return components[0];
    }

    contains(component) {
        return this.#list.filter(e => e.id === component.id).length > 0;
    }

    containsType(type) {
        return this.#list.filter(e => e.type === type).length > 0;
    }

    containsAllTypes(types) {
        return types.every(e => this.containsType(e));
    }

    remove(component) {
        let idx = this.#list.map(c => c.id).indexOf(component.id);
        if (idx === -1) throw new ComponentNotThereError();
        return this.#list.splice(idx, 1)[0];
    }

    removeType(type) {
        let remove = this.#list.filter(c => c.type === type);
        this.#list = this.#list.filter(c => c.type !== type);
        return remove;
    }

    get length() {
        return this.#list.length
    }
}

class DuplicateComponentError extends Error {
}

class ComponentNotThereError extends Error {
}

module.exports = {ComponentList, DuplicateComponentError, ComponentNotThereError}