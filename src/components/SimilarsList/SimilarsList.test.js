import React from "react";
import { create } from "react-test-renderer";
import SimilarsList from "./SimilarsList";

const movies = [
    {
        id: 49444,
        title: "Kung Fu Panda 2",
        posterPath: "/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg",
        voteAverage: 6.864,
    },
    {
        id: 49730,
        title: "Red Riding Hood",
        posterPath: "/ixQYkLeLlTTnAoT32dukndyObB6.jpg",
        voteAverage: 5.973,
    },
    {
        id: 51481,
        title: "Mean Girls 2",
        posterPath: "/34zKHT98ZgSCz6ag1ZNBul7f1Wu.jpg",
        voteAverage: 5.259,
    },
];

describe("<SimilarsList /> whitout title prop", () => {
    it("has 1 children of type RCTScrollView", () => {
        const childType = "RCTScrollView";
        const tree = create(<SimilarsList movies={movies} />).toJSON();
        expect(tree.children.length).toBe(1);
        expect(tree.children[0].type).toEqual(childType);
    });
});

describe("<SimilarsList /> whit title prop", () => {
    const tree = create(
        <SimilarsList movies={movies} title={"Similars"} />
    ).toJSON();

    it("has 2 children", () => {
        expect(tree.children.length).toBe(2);
    });

    it("has a first child of type Text", () => {
        const childType = "Text";
        expect(tree.children[0].type).toEqual(childType);
    });

    it("has a second child of type RCTScrollView", () => {
        const childType = "RCTScrollView";
        expect(tree.children[1].type).toEqual(childType);
    });
});
