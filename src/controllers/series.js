const client = require("../database/connection");
const Query = require("../constants/query/Query");
const fs = require("fs");

//models
const Author = require("./models/Author");
const Studio = require("./models/Studio");
const Series = require("./models/Series");
const Character = require("./models/Character");
const VoiceActor = require("./models/VoiceActor");
const Episode = require("./models/Episode");

//authors
const authors = (req, res) => {
  client.query(Query.selectAuthors, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addAuthor = (req, res) => {
  const author = new Author(
    req.body.author_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.birth_country
  );

  client.query(Query.addAuthor, author.getAuthorWithoutId(), (err, result) => {
    console.log(
      author.first_name,
      author.last_name,
      author.birth_date,
      author.birth_country
    );
    if (err) res.send(err.message);
    else res.send("inserted author!");
  });
};

const updateAuthor = (req, res) => {
  const author = new Author(
    req.body.author_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.birth_country
  );

  client.query(Query.updateAuthor, author.getAuthorWithId(), (err, result) => {
    console.log(
      author.author_id,
      author.first_name,
      author.last_name,
      author.birth_date,
      author.birth_country
    );
    if (err) res.send(err.message);
    else res.send("updated author!");
  });
};

const deleteAuthor = (req, res) => {
  const { author_id } = req.params;
  client.query(Query.deleteAuthor, [author_id], (err, result) => {
    console.log(author_id);
    if (err) res.send(err.message);
    else res.send("deleted author!");
  });
};

//studios
const studios = (req, res) => {
  client.query(Query.selectStudio, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addStudio = (req, res) => {
  const studio = new Studio(
    req.body.studio_id,
    req.body.studio_name,
    req.body.c_date,
    req.body.producer,
    req.body.location
  );

  client.query(Query.addStudio, studio.getStudioWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted studio!");
  });
};

const updateStudio = (req, res) => {
  const studio = new Studio(
    req.body.studio_id,
    req.body.studio_name,
    req.body.c_date,
    req.body.producer,
    req.body.location
  );

  client.query(Query.updateStudio, studio.getStudioWithId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated studio!");
  });
};

const deleteStudio = (req, res) => {
  const { studio_id } = req.params;
  console.log(req.params);
  client.query(Query.deleteStudio, [studio_id], (err, result) => {
    console.log(studio_id);
    if (err) res.send(err.message);
    else res.send("deleted studio!");
  });
};

//tv_series
const tv_series = (req, res) => {
  const sql1 = Query.tv_series;
  client.query(sql1, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const tv_series_with_id = (req, res) => {
  const sql = Query.selectTv_series;
  // const series = new Series();
  // series.series_id = req.body.series_id;
  client.query(sql, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addTv_series = (req, res) => {
  const series = new Series(
    req.body.series_id,
    req.body.series_name,
    req.body.publish_date,
    req.body.series_mode,
    req.body.total_episode,
    req.body.description,
    req.body.auth_id,
    req.body.age_order,
    req.body.photo,
    req.body.studio_id
  );
  client.query(
    Query.addTv_series,
    series.getSeriesWithoutId(),
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("inserted series!");
    }
  );
};

const uploadPic = (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were upload.");
  }

  sampleFile = req.files.photo;
  uploadPath = process.cwd() + "/public/img/" + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.send(sampleFile.name);
  });
};

const updateTv_series = (req, res) => {
  const series = new Series(
    req.body.series_id,
    req.body.series_name,
    req.body.publish_date,
    req.body.series_mode,
    req.body.total_episode,
    req.body.description,
    req.body.auth_id,
    req.body.age_order,
    req.body.photo,
    req.body.studio_id
  );

  client.query(
    Query.updateTv_Series,
    series.getSeriesWithId(),
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("updated series!");
    }
  );
};

const deleteTv_series = (req, res) => {
  const { series_id } = req.params;
  client.query(Query.deleteTv_series, [series_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted series!");
  });
};

//Characters

const characters = (req, res) => {
  client.query(Query.selectCharacters, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addCharacter = (req, res) => {
  const character = new Character(
    req.body.series_id,
    req.body.character_name,
    req.body.voice_actor_id
  );
  client.query(Query.addCharacter, character.getWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const updateCharacter = (req, res) => {
  const character = new Character(
    req.body.series_id,
    req.body.character_name,
    req.body.voice_actor_id
  );
  client.query(Query.updateCharacter, character.getWithId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated character!");
  });
};

const deleteCharacter = (req, res) => {
  //TO DO
};

//VoiceActors

const voiceActor = (req, res) => {
  client.query(Query.selectVoiceActors, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addVoiceActor = (req, res) => {
  const actor = new VoiceActor(
    req.body.actor_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date
  );
  client.query(Query.addVoiceActor, actor.getWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted actor!");
  });
};

const updateVoiceActor = (req, res) => {
  const actor = new VoiceActor(
    req.body.actor_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date
  );
  client.query(Query.updateVoiceActor, actor.getWithId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated voice actor!");
  });
};

const deleteVoiceActor = (req, res) => {
  const { actor_id } = req.params;
  client.query(Query.deleteVoiceActor, [actor_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted voice actor!");
  });
};

const uploadVideo = (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were upload.");
  }

  sampleFile = req.files.video;
  uploadPath = process.cwd() + "/public/video/" + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.send(sampleFile.name);
  });
};

const episodes = (req, res) => {
  const episode = new Episode(
    req.body.ep_id,
    req.body.series_name,
    req.body.ep_number,
    req.body.ep_name,
    req.body.ep_date,
    req.body.file_name
  );

  client.query(Query.episodesSeriesName, [episode.series], (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const allEpisodes = (req, res) => {
  client.query(Query.allEpisodes, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addEpisode = (req, res) => {
  const episode = new Episode(
    req.body.ep_id,
    req.body.series_id,
    req.body.ep_number,
    req.body.ep_name,
    req.body.ep_date,
    req.body.file_name,
    req.body.file_path
  );

  client.query(Query.addEpisode, episode.getWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted episode!");
  });
};

const updateEpisode = (req, res) => {
  const episode = new Episode(
    req.body.ep_id,
    req.body.series_id,
    req.body.ep_number,
    req.body.ep_name,
    req.body.ep_date,
    req.body.file_name,
    req.body.file_path
  );

  client.query(Query.updateEpisode, episode.get(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated episode!");
  });
};

const deleteEpisode = (req, res) => {
  const {ep_id} = req.params;

  client.query(Query.deleteEpisode, [ep_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted episode!");
  });
};

module.exports = {
  addEpisode,
  allEpisodes,
  updateEpisode,
  deleteEpisode,
  episodes,
  uploadVideo,
  uploadPic,
  authors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  studios,
  addStudio,
  updateStudio,
  deleteStudio,
  tv_series,
  addTv_series,
  updateTv_series,
  deleteTv_series,
  tv_series_with_id,
  characters,
  voiceActor,
  addVoiceActor,
  updateVoiceActor,
  deleteVoiceActor,
};
