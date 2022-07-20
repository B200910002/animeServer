class Series {
  constructor(
    series_id,
    series_name,
    publish_date,
    series_mode,
    total_episode,
    description,
    auth_id,
    age_order,
    photo,
    studio_id
  ) {
    this.series_id = series_id;
    this.series_name = series_name;
    this.publish_date = publish_date;
    this.series_mode = series_mode;
    this.total_episode = total_episode;
    this.description = description;
    this.auth_id = auth_id;
    this.age_order = age_order;
    this.photo = photo;
    this.studio_id = studio_id;
  }

  getSeriesWithId() {
    return [
      this.series_id,
      this.series_name,
      this.publish_date,
      this.series_mode,
      this.total_episode,
      this.description,
      this.auth_id,
      this.age_order,
      this.photo,
      this.studio_id,
    ];
  }

  getSeriesWithoutId() {
    return [
      this.series_name,
      this.publish_date,
      this.series_mode,
      this.total_episode,
      this.description,
      this.auth_id,
      this.age_order,
      this.photo,
      this.studio_id,
    ];
  }
}

module.exports = Series;
