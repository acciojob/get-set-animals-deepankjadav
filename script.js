class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        // Default behavior for animals if no specific sound is implemented
        return `The ${this._species} makes a sound`;
    }
}

class Dog extends Animal {
    constructor() {
        super("Golden Retriever"); // Assigning a specific breed
    }

    makeSound() {
        return "woof"; // Dog-specific sound
    }

    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    constructor() {
        super("Siamese"); // Assigning a specific breed
    }

    makeSound() {
        return "purr"; // Cat-specific sound
    }

    purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
