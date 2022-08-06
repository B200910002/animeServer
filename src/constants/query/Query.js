//series
const selectTv_series = "select * from tv_series";
const selectTv_seriesWithId = "select * from tv_series where series_id = $1";
const tv_series ="select series_id,tv_series.series_name, publish_date,series_mode,total_episode,description,concat(authors.first_name ,' ', authors.last_name) as author_name, age_order,photo,studio.studio_name from tv_series inner join authors on tv_series.auth_id = authors.auth_id inner join studio on tv_series.studio_id = studio.studio_id";
const addTv_series ="insert into tv_series (series_name, publish_date, series_mode, total_episode, description, auth_id, age_order,photo, studio_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
const updateTv_Series ="update tv_series set series_name = $2, publish_date = $3, series_mode = $4, total_episode = $5, description = $6, auth_id = $7, age_order = $8,photo = $9, studio_id = $10 where series_id = $1";
const deleteTv_series = "delete from tv_series where series_id = $1";

//episodes
const allEpisodes = 'select * from episodes'
const episodesSeriesId = 'select * from where series_id = $1'
const episodesSeriesIdEpNum = 'select * from where series_id = $1 and ep_number = $2'
const episodesSeriesName = 'select * from episodes where series_id = (select series_id from tv_series where series_name = $1)'
const addEpisode = 'insert into episodes (series_id, ep_number, ep_name, ep_date, file_name, file_path) values($1,$2,$3,$4,$5,$6)'
const updateEpisode = 'update episodes set series_id = $2, ep_number = $3, ep_name = $4, ep_date = $5, file_name = $6, file_path = $7 where ep_id = $1'
const deleteEpisode = 'delete from episodes where ep_id = $1'


//author
const selectAuthors = "select * from authors";
const addAuthor = "INSERT INTO authors (first_name ,last_name ,birth_date ,brith_country) VALUES ($1,$2,$3,$4)";
const updateAuthor ="update authors set first_name = $2,last_name = $3, birth_date = $4, brith_country = $5 where auth_id = $1";
const deleteAuthor = "delete from authors where auth_id = $1";

// studio
const selectStudio = "select * from studio";
const addStudio = "insert into studio (studio_name, c_date, found_producer, f_location) values ($1,$2,$3,$4)";
const updateStudio = "update studio set studio_name = $2, c_date = $3, found_producer = $4, f_location = $5 where studio_id = $1";
const deleteStudio = "delete from studio where studio_id = $1";

// character
const selectCharacters = "select * from series_characters";
const addCharacter ="insert into series_characters (character_name, voice_actor_id) values ($1,$2)";
const updateCharacter = "update series_character set character_name = $2, voice_actor_id = $3 where";
const deleteCharacter ="delete from series_characters where series_id = $1 and character_name = $2";

// voice actor
const selectVoiceActors = "select * from voice_actor";
const addVoiceActor ="insert into voice_actor (first_name, last_name, birth_date) values ($1,$2,$3)";
const updateVoiceActor ="update voice_actor set first_name = $2, last_name = $3, birth_date = $4 where voice_actor_id = $1";
const deleteVoiceActor = "delete from voice_actor where voice_actor_id = $1";

//customer
const selectCustomer = "select * from customers";
const addCustomer ="insert into customers (first_name, last_name, birth_date, gender,username, password) values ($1,$2,$3,$4,$5,$6)";
const updateCustomer ="update customers set first_name = $2, last_name = $3, birth_date = $4, gender = $5,username = $6, password = $7 where cus_id = $1";
const deleteCustomer = "delete from customers where cus_id = $1";
const selectCusUP ="select * from customers where username = $1 and password = $2";

//customer numbers
const selectCusNum = "select * from cus_numbers";
const addCusNum = "insert into cus_numbers (cus_id, cus_number) values ($1,$2)";
const updateCudNum ="update cus_numbers set cus_number = $3 where cus_id = $1 and cus_number = $2";
const deleteCusNum ="delete from cus_numbers where cus_id = $1 and cus_number = $2";

//customer mails
const selectCusMail = "select * from cus_mail";
const addCusMail = "insert into cus_mail (cus_id, cus_mail) values ($1,$2)";
const updateCusMail ="update cus_mail set cus_mail = $3 where cus_id = $1 and cus_mail = $2";
const deleteCusMail ="delete from cus_mail where cus_id = $1 and cus_mail = $2";

//translator
const selectTrans = "select * from translators";
const loginTrans = "select * from translators where username = $1 and password = $2";
const registTrans = "insert into translators (first_name,last_name,regist,birth_date,ranke_id,email,username,password) values ($1,$2,$3,$4,$5,$6,$7,$8)";
const updateTrans ="update translators set first_name = $2, last_name = $3, regist = $4, birth_date = $5, ranke_id = $6, email = $7, username = $8, password = $9 where tra_id = $1";
const deleteTrans = "delete from translators where tra_id = $1";

//translator number
const selectTraNumbers = "select * from tra_numbers";
const addTraNumber ="insert into tra_numbers (tra_id, tra_number) values ($1, $2)";
const updateTraNumber ="update tra_numbers set tra_number = $2 where tra_id = $1"; //TO DO
const deleteTraNumber = "delete from tra_numbers where tra_id = $1"; //TO DO

//viewservice
const selectViewService = "select * from view_service";
const viewService = "";



module.exports = {
  addEpisode,
  updateEpisode,
  deleteEpisode,
  allEpisodes,
  episodesSeriesId,
  episodesSeriesIdEpNum,
  episodesSeriesName,
  selectTraNumbers,
  addTraNumber,
  updateTraNumber,
  deleteTraNumber,
  updateTrans,
  deleteTrans,
  selectAuthors,
  selectStudio,
  selectTv_series,
  selectCharacters,
  selectVoiceActors,
  selectTv_seriesWithId,
  tv_series,
  addAuthor,
  addStudio,
  addTv_series,
  addCharacter,
  addVoiceActor,
  updateAuthor,
  updateStudio,
  updateTv_Series,
  updateCharacter,
  updateVoiceActor,
  deleteAuthor,
  deleteStudio,
  deleteTv_series,
  deleteCharacter,
  deleteVoiceActor,
  selectCustomer,
  selectCusNum,
  selectCusMail,
  addCustomer,
  addCusNum,
  addCusMail,
  updateCustomer,
  updateCudNum,
  updateCusMail,
  deleteCustomer,
  deleteCusNum,
  deleteCusMail,
  selectCusUP,
  selectTrans,
  loginTrans,
  registTrans,
  selectViewService,
  viewService,
};
