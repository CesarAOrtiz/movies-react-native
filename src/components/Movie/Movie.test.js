import React from "react";
import render from "react-test-renderer";
import Movie from "./Movie";

describe("<Movie />", () => {
    const movie = {
        backdrop: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
        genres: [{ id: 28, name: "Action" }],
        id: 497698,
        title: "Black Widow",
        overview: "Black Widow, confronts the darker parts of her ledger",
        poster: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        releaseDate: new Date("2017-05-04").toDateString(),
        title: "Black Widow",
        voteAverage: 8.0,
    };

    const tree = render.create(<Movie movie={movie} />).toJSON();

    it("Render the movie image", () => {
        const image = tree.children[0].children[0];
        expect(image.type).toBe("Image");
        expect(image.props.source.uri).toBe(movie.poster);
    });

    it("Render a RNSVGGroup", () => {
        expect(tree.children[1].children[0].children[0].type).toBe(
            "RNSVGGroup"
        );
    });

    it("Render movie title", () => {
        expect(tree.children[2].children[0].children[0].children[0]).toBe(
            movie.title
        );
    });

    it("Render movie release date string", () => {
        expect(tree.children[2].children[1].children[0]).toBe(
            movie.releaseDate
        );
    });
});
