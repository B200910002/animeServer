class Translator {
  constructor(traId, firstName, lastName, regist, birthDate, rankeId,email,userName, password) {
    this.traId = traId
    this.firstName = firstName
    this.lastName = lastName
    this.regist = regist
    this.birthDate = birthDate
    this.rankeId = rankeId
    this.email = email
    this.userName = userName
    this.password = password
  }

  getWithId(){
    return [this.traId,this.firstName,this.lastName,this.regist,this.birthDate,this.rankeId,this.email,this.userName,this.password,];
  }
  getWithoutId(){
    return [this.firstName,this.lastName,this.regist,this.birthDate,this.rankeId,this.email,this.userName,this.password,];
  }
}

module.exports = Translator;
