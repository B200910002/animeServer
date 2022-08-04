class Query{
    //series
    static selectTv_series = "select * from tv_series";
    static selectTv_seriesWithId = "select * from tv_series where series_id = $1";
    static tv_series ="select series_id,tv_series.series_name, publish_date,series_mode,total_episode,description,concat(authors.first_name ,' ', authors.last_name) as author_name, age_order,photo,studio.studio_name from tv_series inner join authors on tv_series.auth_id = authors.auth_id inner join studio on tv_series.studio_id = studio.studio_id";
    static addTv_series ="insert into tv_series (series_name, publish_date, series_mode, total_episode, description, auth_id, age_order,photo, studio_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
    static updateTv_Series ="update tv_series set series_name = $2, publish_date = $3, series_mode = $4, total_episode = $5, description = $6, auth_id = $7, age_order = $8,photo = $9, studio_id = $10 where series_id = $1";
    static deleteTv_series = "delete from tv_series where series_id = $1";

    //author
    static selectAuthors = "select * from authors";
    static addAuthor ="INSERT INTO authors (first_name ,last_name ,birth_date ,brith_country) VALUES ($1,$2,$3,$4)";
    static updateAuthor ="update authors set first_name = $2,last_name = $3, birth_date = $4, brith_country = $5 where auth_id = $1";
    static deleteAuthor = "delete from authors where auth_id = $1";

    // studio
    static selectStudio = "select * from studio";
    static addStudio ="insert into studio (studio_name, c_date, found_producer, f_location) values ($1,$2,$3,$4)";
    static updateStudio = "update studio set studio_name = $2, c_date = $3, found_producer = $4, f_location = $5 where studio_id = $1";
    static deleteStudio = "delete from studio where studio_id = $1";

    // character
    static selectCharacters = "select * from series_characters";
    static addCharacter ="insert into series_characters (character_name, voice_actor_id) values ($1,$2)";
    static updateCharacter ="update series_character set character_name = $2, voice_actor_id = $3 where";
    static deleteCharacter = "delete from series_characters where series_id = $1 and character_name = $2";

    // voice actor
    static selectVoiceActors = "select * from voice_actor";
    static addVoiceActor ="insert into voice_actor (first_name, last_name, birth_date) values ($1,$2,$3)";
    static updateVoiceActor = "update voice_actor set first_name = $2, last_name = $3, birth_date = $4 where voice_actor_id = $1";
    static deleteVoiceActor = "delete from voice_actor where voice_actor_id = $1";

    //customer
    static selectCustomer = "select * from customers";
    static selectCusNum = "select * from cus_numbers";
    static selectCusMail = "select * from cus_mail";
    static addCustomer ="insert into customers (first_name, last_name, birth_date, gender,username, password) values ($1,$2,$3,$4,$5,$6)";
    static addCusNum = "";
    static addCusMail = "";
    static updateCustomer = "";
    static updateCudNum = "";
    static updateCusMail = "";
    static deleteCustomer = "";
    static deleteCudNum = "";
    static selectCusUP ="select * from customers where username = $1 and password = $2";
    static deleteCusMail = "";
    static allCustomer = "";

    //regist

    //translator
    static selectTrans = "select * from translators";
    static loginTrans ="select * from translators where username = $1 and password = $2";
    static registTrans ="insert into translators (first_name,last_name,regist,birth_date,ranke_id,email,username,password) values ($1,$2,$3,$4,$5,$6,$7,$8)";
    static updateTrans = "update translators set first_name = $2, last_name = $3, regist = $4, birth_date = $5, ranke_id = $6, email = $7, username = $8, password = $9 where tra_id = $1";
    static deleteTrans = "delete from translators where tra_id = $1";

    //translator number
    static selectTraNumbers = 'select * from tra_numbers';
    static addTraNumber = 'insert into tra_numbers (tra_id, tra_number) values ($1, $2)'
    static updateTraNumber = 'update tra_numbers set tra_number = $2 where tra_id = $1'; //TO DO
    static deleteTraNumber = 'delete from tra_numbers where tra_id = $1'; //TO DO

    //viewservice
    static selectViewService = "select * from view_service";
    static viewService = "";
}


module.exports = Query;
