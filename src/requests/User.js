const faker = require('faker');

class User {
    constructor() {
        this.name = faker.name.firstName();
        this.job = faker.name.jobTitle();
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setJob(job) {
        this.job = job;
        return this;
    }
}

module.exports = User;