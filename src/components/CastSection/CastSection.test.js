import React from "react";
import { create, act } from "react-test-renderer";
import CastSection from "./CastSection";

const id = 497698;
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

// describe("<CastSection /> whit a provided cast", () => {
//     it("Children CastList has the provided data", async () => {
//         let container;
//         await act(async () => {
//             container = create(<CastSection id={id} providedCast={cast} />);
//         });
//         expect(container.toJSON().children[1].children[0].props.data).toEqual(
//             cast
//         );
//     });
// });

describe("<CastSection /> whitout a provided cast", () => {
    it("Render a ActivityIndicator", async () => {
        global.fetch = require("node-fetch");
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(cast),
            })
        );
        const loaderComponent = "ActivityIndicator";
        let container;
        await act(async () => {
            container = create(<CastSection id={id} />);
        });
        expect(container.toJSON().children[1].children[0].type).toEqual(
            loaderComponent
        );
    });
});
