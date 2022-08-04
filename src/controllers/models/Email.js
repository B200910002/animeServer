class Email {
  constructor(ownerId, email) {
    this.ownerId = ownerId;
    this.email = email;
    this.changedEmail;
  }

  get() {
    return [this.ownerId, this.email];
  }
  getWithChanged() {
    return [this.ownerId,this.email,this.changedEmail];
  }
  changeEmail(changedEmail){
    this.changedEmail = changedEmail
  }
}

module.exports = Email;
