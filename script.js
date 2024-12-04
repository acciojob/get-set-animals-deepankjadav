class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        // Default sound for generic animals
        return `The ${this._species} makes a sound`;
    }
}

class Dog extends Animal {
    constructor() {
        super("Dog");
    }

    makeSound() {
        return "woof"; // Match test expectations
    }
}

class Cat extends Animal {
    constructor() {
        super("Cat");
    }

    makeSound() {
        return "purr"; // Match test expectations
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
