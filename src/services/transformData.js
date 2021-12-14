import { IMG_URL } from "@env";

export function getMovieData(json) {
  const movie = {};
  movie.id = json.id;
  movie.title = json.title;
  movie.overview = json.overview;
  movie.poster = IMG_URL + "w500/" + json.poster_path;
  movie.backdrop = IMG_URL + "original/" + json.backdrop_path;
  movie.releaseDate = json.release_date;
  movie.voteAverage = json.vote_average;
  movie.genres = json.genres;
  return movie;
}

export function getActor(json) {
  const actor = {
    name: json.name,
    character: json.character,
    profilePath: IMG_URL + "w185" + json.profile_path,
    id: json.id,
  };
  return actor;
}
