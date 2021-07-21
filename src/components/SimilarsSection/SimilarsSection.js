import React, { useEffect, useState } from "react";
import TMDB from "../../services/TMDB";
import SimilarList from "../SimilarsList/SimilarsList";

export default function SimilarsSection({
    id,
    navigation,
    providedSimilars = [],
    providedTitle = "Similars",
}) {
    const [similars, setSimilars] = useState(providedSimilars);

    useEffect(() => {
        async function fetchSimilars() {
            try {
                const similars = await new TMDB().getSimilars(id);
                setSimilars(similars);
            } catch (error) {
                setSimilars([]);
            }
        }
        if (providedSimilars.length <= 0) fetchSimilars();
    }, []);

    return (
        <SimilarList
            movies={similars}
            navigation={navigation}
            title={providedTitle}
        />
    );
}
