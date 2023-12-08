const { faker } = require('@faker-js/faker');

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        createdAt: faker.date.past(),
    };
}

function createMultipleUser(count) {
    return faker.helpers.multiple(createRandomUser, {
        count
    })
}

module.exports = {
    createRandomUser,
    createMultipleUser
}