class Episode {
  constructor(episodeId, series, epNumber, episodeName, episodeDate, fileName, path) {
    this.episodeId = episodeId
    this.series = series
    this.epNumber = epNumber
    this.episodeName = episodeName
    this.episodeDate = episodeDate
    this.fileName = fileName
    this.path = path
  }

  get(){
    return [this.episodeId, this.series, this.epNumber, this.episodeName, this.episodeDate, this.fileName,this.path]
  }

  getWithoutId(){
    return [this.series, this.epNumber, this.episodeName, this.episodeDate, this.fileName, this.path]
  }
}

module.exports = Episode;
