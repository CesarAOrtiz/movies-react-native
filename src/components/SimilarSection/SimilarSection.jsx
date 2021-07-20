import React, { useEffect, useState } from "react";
import TMDB from "../../services/TMDB";
import SimilarList from "../SimilarsList/SimilarsList";

export default function SimilarSection({ id, navigation }) {
    const [similars, setSimilars] = useState([]);

    useEffect(() => {
        async function fetchSimilars() {
            try {
                const similars = await new TMDB().getMovieSimilars(id);
                setSimilars(similars);
            } catch (error) {
                setSimilars([]);
            }
        }
        fetchSimilars();
    }, []);

    return (
        <SimilarList
            movies={similars}
            navigation={navigation}
            title={"Similars"}
        />
    );
}
