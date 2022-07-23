class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

class Customer {
  constructor(customerId, firstName, lastName, birthDate, gender, userName, password) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.userName = userName;
    this.password = password;
  }
}

const list = { User, Customer };

module.exports = list;
