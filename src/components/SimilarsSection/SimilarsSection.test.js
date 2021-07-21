import React from "react";
import { create, act } from "react-test-renderer";
import SimilarsSection from "./SimilarsSection";

const id = 497698;
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

describe("<SimilarsSection /> whit provided movies", () => {
    it("Children SimilarsList has the provided data", async () => {
        let container;
        await act(async () => {
            container = create(
                <SimilarsSection id={id} providedSimilars={movies} />
            );
        });
        expect(container.toJSON().children[1].props.data).toEqual(movies);
    });
});

describe("<SimilarsSection /> whitout provided movies", () => {
    it("Render a ActivityIndicator", async () => {
        const loaderComponent = "ActivityIndicator";
        let container;
        await act(async () => {
            container = create(<SimilarsSection id={id} />);
        });
        expect(container.toJSON().children[1].type).toEqual(loaderComponent);
    });
});
