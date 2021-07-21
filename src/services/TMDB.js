import { APY_KEY } from "@env";
export default class TMDB {
    imageURL = "https://image.tmdb.org/t/p/w500";
    imageCastURL = "https://image.tmdb.org/t/p/w185";
    baseURL = "https://api.themoviedb.org/3/";
    apiKey = APY_KEY;

    sortByTitle(a, b) {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }
        return 0;
    }

    async getNowPlayingMovies(page = 1) {
        const uri = `${this.baseURL}movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`;
        try {
            const response = await fetch(uri);
            const json = await response.json();
            const results = json.results.map((movie) =>
                this.getMovieData(movie)
            );
            results.sort(this.sortByTitle);
            return results;
        } catch (error) {
            return error;
        }
    }

    async getMovie(id) {
        const uri = `${this.baseURL}movie/${id}?api_key=${this.apiKey}&language=en-US`;
        try {
            const response = await fetch(uri);
            const json = await response.json();
            return this.getMovieData(json);
        } catch (error) {
            return error;
        }
    }

    async getMovieCast(id) {
        const uri = `${this.baseURL}movie/${id}/credits?api_key=${this.apiKey}&language=en-US`;
        try {
            const response = await fetch(uri);
            const json = await response.json();
            const characters = json.cast.filter(
                (actor) =>
                    actor.character !== null && actor.profile_path !== null
            );
            const results = characters.map((actor) => this.getActor(actor));
            return results;
        } catch (error) {
            return error;
        }
    }

    async getMovieSimilars(id, page = 1) {
        const uri = `${this.baseURL}movie/${id}/similar?api_key=${this.apiKey}&language=en-US&page=${page}`;
        try {
            const response = await fetch(uri);
            const json = await response.json();
            const results = json.results.map((movie) =>
                this.getMovieData(movie)
            );
            return results;
        } catch (error) {
            return error;
        }
    }

    getMovieData(json) {
        const movie = {};
        movie.id = json.id;
        movie.title = json.title;
        movie.overview = json.overview;
        movie.poster = this.imageURL + json.poster_path;
        movie.backdrop = this.imageURL + json.backdrop_path;
        movie.releaseDate = json.release_date;
        movie.voteAverage = json.vote_average;
        movie.genres = json.genres;
        return movie;
    }

    getActor(json) {
        const actor = {
            name: json.name,
            character: json.character,
            profilePath: this.imageURL + json.profile_path,
            id: json.id,
        };
        return actor;
    }
}
