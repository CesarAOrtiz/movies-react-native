import React from "react";
import render from "react-test-renderer";
import Cast from "./Cast";

describe("<Cast />", () => {
    const actor = {
        id: 1245,
        name: "Scarlett Johansson",
        profilePath: "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
        character: "Natasha Romanoff / Black Widow",
    };
    it("has 2 children", () => {
        const tree = render.create(<Cast actor={actor} />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
