class Number {
  constructor(ownerId, number) {
    this.ownerId = ownerId;
    this.number = number;
    this.changedNumber;
  }

  get(){
    return [this.ownerId, this.number];
  }

  getWithChange() {
    return [this.ownerId, this.number, this.changedNumber];
  }

  changeNumber(changedNumber) {
    this.changedNumber = changedNumber;
  }
}

module.exports = Number;
