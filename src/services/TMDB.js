import { APY_KEY } from "@env";
export default class TMDB {
    imageURL = "https://image.tmdb.org/t/p/original";
    imageCastURL = "https://image.tmdb.org/t/p/w185";
    baseURL = "https://api.themoviedb.org/3/";
    apiKey = APY_KEY;

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

    async getCast(id) {
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

    async getSimilars(id, page = 1) {
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

    sortByTitle(a, b) {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }
        return 0;
    }

    async getGuestSession() {
        const uri = `${this.baseURL}authentication/guest_session/new?api_key=${this.apiKey}`;
        try {
            const response = await fetch(uri);
            const json = await response.json();
            return json;
        } catch (error) {
            return error;
        }
    }

    async rate(sessionId, movieId, value) {
        const uri = `${this.baseURL}movie/${movieId}/rating?api_key=${this.apiKey}&guest_session_id=${sessionId}`;
        try {
            const response = await fetch(uri, {
                method: "POST",
                body: JSON.stringify({ value: value }),
                headers: { "Content-Type": "application/json" },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            return error;
        }
    }

    async getRatedMovies(sessionId, page = 1) {
        const uri = `${this.baseURL}guest_session/${sessionId}/rated/movies?api_key=${this.apiKey}&language=en-US&sort_by=created_at.asc&page=${page}`;
        try {
            const response = await fetch(uri);
            const json = await response.json();
            const results = {};
            json.results.forEach((movie) => {
                results[movie.id] = movie.rating;
            });
            return results;
        } catch (error) {
            return error;
        }
    }
}
