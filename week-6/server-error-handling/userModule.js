const { InvalidUsernameError, DuplicatedResourceError, UserNotFoundError, UserInputError} = require('./errorHandling')

const users = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]

const addUser = function (newUser) {
    const { userName, name, country, age } = newUser;

    if (!userName || !name || !country || !age) {
        throw new UserInputError('All fields (username, name, country, age) are required');
    }

    if (typeof userName !== 'string' || !userName.match(/^[a-z]+$/i)) {
        throw new InvalidUsernameError('Invalid username format');
    }

    if (isNaN(parseInt(age))) {
        throw new UserInputError('Age must be a number');
    }
    let doesExist = users.some(w => w.username === userName)
    if (doesExist) {
        throw new DuplicatedResourceError()
    }
    users.push(newUser)
}

const deleteUser = function (username) {
    let userIndex = users.findIndex(user => user.username === username)
    if (userIndex === -1) {
        throw new UserNotFoundError(`User ${username} not found`)
    } else {
        users.splice(userIndex, 1)
    }
}

const getAll = function () {
    return users
}

const getUserByUsername = function (username) {
    let user = users.find(user => user.username === username);
    if (!user) {
        throw new UserNotFoundError(`User ${username} not found`);
    }
    return user;
}

module.exports = {
    add: addUser,
    delete: deleteUser,
    getAll: getAll,
    getUserByUsername: getUserByUsername
}
