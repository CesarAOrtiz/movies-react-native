import TMDB from "./TMDB";

describe("TMDB", () => {
    const service = new TMDB();

    const movie = {
        id: 497698,
        title: "Black Widow",
        overview:
            "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        poster: "https://image.tmdb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
        releaseDate: "2021-07-07",
        voteAverage: 8,
        genres: [
            { id: 28, name: "Action" },
            { id: 12, name: "Adventure" },
            { id: 53, name: "Thriller" },
            { id: 878, name: "Science Fiction" },
        ],
    };
    const actor = {
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow",
        profilePath:
            "https://image.tmdb.org/t/p/original/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
        id: 1245,
    };
    global.fetch = require("node-fetch");

    it("The array of Playing Movies has length", async () => {
        const getNowPlayingMovies = await service.getNowPlayingMovies();
        expect(getNowPlayingMovies.length > 0).toBeTruthy();
    });

    it("Get the correct movie", async () => {
        const getMovie = await service.getMovie(movie.id);
        expect(getMovie).toEqual(movie);
    });

    it("Get the correct cast", async () => {
        const getCast = await service.getCast(movie.id);
        expect(getCast[0]).toEqual(actor);
    });

    it("Get similars movies", async () => {
        const getSimilars = await service.getSimilars(movie.id);
        expect(getSimilars.length > 0).toBeTruthy();
        delete global.fetch;
    });
});
