class Author {
  constructor(author_id, first_name, last_name, birth_date, birth_country) {
    this.author_id = author_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_date = birth_date;
    this.birth_country = birth_country;
  }

  getAuthorWithoutId() {
    return [
      this.first_name,
      this.last_name,
      this.birth_date,
      this.birth_country,
    ];
  }

  getAuthorWithId() {
    return [
      this.author_id,
      this.first_name,
      this.last_name,
      this.birth_date,
      this.birth_country,
    ];
  }
}

module.exports = Author;
