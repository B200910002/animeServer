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

  getWithId(){
    return [this.customerId,this.firstName,this.lastName,this.birthDate,this.gender,this.userName,this.password]
  }

  getWithoutId(){
    return [this.firstName,this.lastName,this.birthDate,this.gender,this.userName,this.password]
  }
}

module.exports = Customer;
