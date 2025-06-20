export const users = {
    "validUser": {
      "username": "Admin",
      "password": "admin123"
    },

    "caseSensitiveUser": {
      "username": "ADMIN",
      "password": "admin123"
    },

    "trailingSpacesUser": {
      "username": "Admin   ",
      "password": "admin123"
    },

    "leadingSpacesUser": {
      "username": "   Admin",
      "password": "admin123"
    },

    "invalidUsername": {
      "username": "invalidName",
      "password": "admin123"
    },

    "invalidPassword": {
      "username": "Admin",
      "password": "invalidPw"
    },

    "invalidAllSpaces": {
      "username": "   ",
      "password": "   "
    }
  };