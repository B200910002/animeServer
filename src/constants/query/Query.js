const Query = {
  //series
  selectAuthors: "select * from authors",
  selectStudio: "select * from studio",
  selectTv_series: "select * from tv_series",
  selectTv_seriesWithId: "select * from tv_series where series_id = $1",
  tv_series:
    "select series_id,tv_series.series_name, publish_date,series_mode,total_episode,description,concat(authors.first_name ,' ', authors.last_name) as author_name, age_order,photo,studio.studio_name from tv_series inner join authors on tv_series.auth_id = authors.auth_id inner join studio on tv_series.studio_id = studio.studio_id",
  addAuthor:
    "INSERT INTO authors (first_name ,last_name ,birth_date ,brith_country) VALUES ($1,$2,$3,$4)",
  addStudio:
    "insert into studio (studio_name, c_date, found_producer, f_location) values ($1,$2,$3,$4)",
  addTv_series:
    "insert into tv_series (series_name, publish_date, series_mode, total_episode, description, auth_id, age_order,photo, studio_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
  updateAuthor:
    "update authors set first_name = $2,last_name = $3, birth_date = $4, brith_country = $5 where auth_id = $1",
  updateStudio:
    "update studio set studio_name = $2, c_date = $3, found_producer = $4, f_location = $5 where studio_id = $1",
  updateTv_Series:
    "update tv_series set series_name = $2, publish_date = $3, series_mode = $4, total_episode = $5, description = $6, auth_id = $7, age_order = $8,photo = $9, studio_id = $10 where series_id = $1",
  deleteAuthor: "delete from authors where auth_id = $1",
  deleteStudio: "delete from studio where studio_id = $1",
  deleteTv_series: "delete from tv_series where series_id = $1",

  //customer
  selectCustomer: "select * from customers",
  selectCusNum: "select * from cus_numbers",
  selectCusMail: "select * from cus_mail",
  addCustomer:
    "insert into customers (first_name, last_name, birth_date, gender,username, password) values ($1,$2,$3,$4,$5,$6)",
  addCusNum: "",
  addCusMail: "",
  updateCustomer: "",
  updateCudNum: "",
  updateCusMail: "",
  deleteCustomer: "",
  deleteCudNum: "",
  deleteCusMail: "",

  //login
  selectCusUP: "select * from customers where username = $1 and password = $2",

  //regist

  //viewservice
  selectViewService: "select * from view_service",
  viewService: "",
};

module.exports = Query;
