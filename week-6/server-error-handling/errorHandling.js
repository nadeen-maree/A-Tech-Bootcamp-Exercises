class InvalidUsernameError extends Error {}

class DuplicatedResourceError extends Error {}

class UserInputError extends Error {}

class UserNotFoundError extends Error {}

module.exports = {InvalidUsernameError, DuplicatedResourceError, UserNotFoundError, UserInputError}