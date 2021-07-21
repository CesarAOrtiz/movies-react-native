import React from "react";
import render from "react-test-renderer";
import DetailInfo from "./DetailInfo";

describe("<DetailInfo />", () => {
    const movie = {
        backdropPath: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
        genres: [{ id: 28, name: "Action" }],
        id: 497698,
        title: "Black Widow",
        overview: "Black Widow, confronts the darker parts of her ledger",
        posterPath: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        releaseDate: new Date("2017-06-01").toDateString(),
        title: "Black Widow",
        voteAverage: 8.0,
    };

    const tree = render.create(<DetailInfo movie={movie} />).toJSON();

    it("render the movie title", () => {
        expect(tree.children[0].children[0]).toBe(movie.title);
    });
    it("Render the movie overviw", () => {
        expect(tree.children[3].children[0]).toBe(movie.overview);
    });
    it("Render the movie release date string", () => {
        expect(tree.children[5].children[0]).toBe(movie.releaseDate);
    });
    it("Render the movie genres", () => {
        expect(tree.children[7].children[0]).toBe(
            movie.genres.map((genre) => genre.name).join(", ")
        );
    });
});
