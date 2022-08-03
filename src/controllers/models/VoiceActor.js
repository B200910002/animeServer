class VoiceActor {
  constructor(voiceActorId, firstName, lastName, bithDate) {
    this.voiceActorId = voiceActorId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bithDate = bithDate;
  }

  getWithId() {
    return [this.voiceActorId, this.firstName, this.lastName, this.bithDate];
  }
  getWithoutId() {
    return [this.firstName, this.lastName, this.bithDate];
  }

  toString() {
    return (
      "[" +
      this.voiceActorId +
      ", " +
      this.firstName +
      ", " +
      this.lastName +
      ", " +
      this.bithDate +
      "]"
    );
  }
}

module.exports = VoiceActor;
