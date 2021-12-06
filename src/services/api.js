import { request } from "react-request-hook";
import { API_KEY } from "@env";

const imageURL = "https://image.tmdb.org/t/p/";
const imageCastURL = "https://image.tmdb.org/t/p/w185";

function sortByTitle(a, b) {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  }
  return 0;
}

function getMovieData(json) {
  const movie = {};
  movie.id = json.id;
  movie.title = json.title;
  movie.overview = json.overview;
  movie.poster = imageURL + "w500/" + json.poster_path;
  movie.backdrop = imageURL + "original/" + json.backdrop_path;
  movie.releaseDate = json.release_date;
  movie.voteAverage = json.vote_average;
  movie.genres = json.genres;
  return movie;
}

function getActor(json) {
  const actor = {
    name: json.name,
    character: json.character,
    profilePath: imageCastURL + json.profile_path,
    id: json.id,
  };
  return actor;
}

export const getNowPlayingMovies = (page = 1) =>
  request({
    url: `movie/now_playing?page=${page}`,
    method: "GET",
    transformResponse: [
      (data) => {
        const json = JSON.parse(data);
        const results = json.results.map(getMovieData);
        results.sort(sortByTitle);
        return results;
      },
    ],
  });

export const getMovie = (id) =>
  request({
    url: `movie/${id}`,
    method: "GET",
    transformResponse: [
      (data) => {
        const json = JSON.parse(data);
        const results = getMovieData(json);
        return results;
      },
    ],
  });

export const getCast = (id) =>
  request({
    url: `movie/${id}/credits`,
    method: "GET",
    transformResponse: [
      (data) => {
        const json = JSON.parse(data);
        const characters = json.cast.filter(
          (actor) => actor.character && actor.profile_path
        );
        const results = characters.map(getActor);
        return results;
      },
    ],
  });

export const getSimilars = (id, page = 1) =>
  request({
    url: `movie/${id}/similar?page=${page}`,
    method: "GET",
    transformResponse: [
      (data) => {
        const json = JSON.parse(data);
        const results = json.results.map(getMovieData);
        return results;
      },
    ],
  });

export const getGuestSession = () =>
  request({ url: `authentication/guest_session/new`, method: "GET" });

export const rate = (sessionId, movieId, value) =>
  request({
    url: `movie/${movieId}/rating?guest_session_id=${sessionId}`,
    method: "POST",
    data: { value },
  });

export const getRatedMovies = (sessionId, page = 1) =>
  request({
    url: `mguest_session/${sessionId}/rated/movies?sort_by=created_at.asc&page=${page}`,
    method: "GET",
    transformResponse: [
      (data) => {
        const json = JSON.parse(data);
        const results = {};
        json.results.forEach((movie) => {
          results[movie.id] = movie.rating;
        });
        return results;
      },
    ],
  });
