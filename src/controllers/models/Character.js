class Character {
  constructor(seriesId, characterName, voiceActorId) {
    this.seriesId = seriesId;
    this.characterName = characterName;
    this.voiceActorId = voiceActorId;
  }

  getWithId() {
    return [this.seriesId, this.characterName, this.voiceActorId];
  }

  getWithoutId() {
    return [this.characterName, this.voiceActorId];
  }
}

module.exports = Character;
