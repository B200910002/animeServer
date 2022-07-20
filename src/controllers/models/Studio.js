class Studio {
  constructor(studio_id, studio_name, c_date, producer, location) {
    this.studio_id = studio_id;
    this.studio_name = studio_name;
    this.c_date = c_date;
    this.producer = producer;
    this.location = location;
  }

  getStudioWithId() {
    return [
      this.studio_id,
      this.studio_name,
      this.c_date,
      this.producer,
      this.location,
    ];
  }

  getStudioWithoutId() {
    return [this.studio_name, this.c_date, this.producer, this.location];
  }
}

module.exports = Studio;
