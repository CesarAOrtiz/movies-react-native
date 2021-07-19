import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import Movie from "../Movie/Movie";
import TMDB from "../../services/TMDB";
// import * as Linking from "expo-linking";

function adapt(screenWidth, objectWidth, objectMargin) {
    const space = parseInt(screenWidth / parseInt(objectWidth + objectMargin));
    return `repeat(${space}, 1fr)`;
}

export default function MovieList(props) {
    const [movies, setMovies] = useState([]);

    const [gridTemplateColumns, setGridTemplateColumns] = useState(
        adapt(Dimensions.get("window").width, 260, 20)
    );

    useEffect(() => {
        async function loadMovies() {
            const movies = await new TMDB().getNowPlayingMovies();
            setMovies(movies);
        }
        loadMovies();
    }, []);

    useEffect(() => {
        Dimensions.addEventListener("change", ({ window }) => {
            setGridTemplateColumns(adapt(window.width, 260, 20));
        });
        return () =>
            removeEventListener("change", ({ window }) => {
                setGridTemplateColumns(adapt(window.width, 260, 20));
            });
    }, []);

    const renderItem = ({ item }) => (
        <Movie
            title={item.title}
            poster={item.poster}
            voteAverage={item.voteAverage}
            releaseDate={item.releaseDate}
        />
    );

    return (
        <View>
            {movies && (
                <FlatList
                    contentContainerStyle={{
                        display: "grid",
                        gridTemplateColumns: gridTemplateColumns,
                    }}
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
}
