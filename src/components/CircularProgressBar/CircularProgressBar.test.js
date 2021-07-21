import React from "react";
import render from "react-test-renderer";

import CircularProgressBar from "./CircularProgressBar";

describe("<CircularProgressBar />", () => {
    it("has 2 children", () => {
        const tree = render.create(<CircularProgressBar />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
