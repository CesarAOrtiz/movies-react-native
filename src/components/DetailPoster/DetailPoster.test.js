import React from "react";
import render from "react-test-renderer";
import DetailPoster from "./DetailPoster";

describe("<DetailPoster />", () => {
    const movie = {
        backdrop: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
        genres: [{ id: 28, name: "Action" }],
        id: 497698,
        title: "Black Widow",
        overview: "Black Widow, confronts the darker parts of her ledger",
        posterPath: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        releaseDate: "2021-07-07",
        title: "Black Widow",
        voteAverage: 8.0,
    };

    const tree = render.create(<DetailPoster movie={movie} />).toJSON();

    it("Render the movie image", () => {
        const image = tree.children[0].children[0];
        expect(image.type).toBe("Image");
        expect(image.props.source.uri).toBe(movie.backdrop);
    });

    it("Render a RNSVGSvgView", () => {
        const circle = tree.children[0].children[1];
        expect(circle.children[0].type).toBe("RNSVGSvgView");
    });
});
