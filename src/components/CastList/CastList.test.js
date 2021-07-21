import React from "react";
import render from "react-test-renderer";
import CastList from "./CastList";

describe("<CastList /> whit provided cast", () => {
    const cast = [
        {
            id: 1245,
            name: "Scarlett Johansson",
            profilePath: "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
            character: "Natasha Romanoff / Black Widow",
        },
        {
            id: 1373737,
            name: "Florence Pugh",
            profilePath: "/75PvULemW8BvheSKtPMoBBsvPLh.jpg",
            character: "Yelena Belova",
        },
        {
            id: 3293,
            name: "Rachel Weisz",
            profilePath: "/3QbFXeiUzXUVUrJ7fdiCn7A7ReW.jpg",
            character: "Melina Vostokoff",
        },
        {
            id: 35029,
            name: "David Harbour",
            profilePath: "/chPekukMF5SNnW6b22NbYPqAStr.jpg",
            character: "Alexei Shostakov / Red Guardian",
        },
    ];

    it("has child of type RCTScrollView", () => {
        const tree = render.create(<CastList cast={cast} />).toJSON();
        const childType = "RCTScrollView";
        expect(tree.children.length).toBe(1);
        expect(tree.children[0].type).toEqual(childType);
    });
});
