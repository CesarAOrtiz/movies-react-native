import React, { useEffect, useState } from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
} from "react-native";
import Movie from "./Movie/Movie";
import TMDB from "../../services/TMDB";

function getGridSpace(screenWidth, objectWidth, objectMargin) {
    const space = parseInt(screenWidth / parseInt(objectWidth + objectMargin));
    return `repeat(${space}, 1fr)`;
}

export default function MovieList(props) {
    const [movies, setMovies] = useState([]);

    const [gridTemplateColumns, setGridTemplateColumns] = useState(
        getGridSpace(Dimensions.get("window").width, 260, 20)
    );

    useEffect(() => {
        async function loadMovies() {
            try {
                const movies = await new TMDB().getNowPlayingMovies();
                setMovies(movies);
            } catch (error) {
                setMovies([]);
            }
        }
        loadMovies();
    }, []);

    useEffect(() => {
        const setGrids = ({ window }) =>
            setGridTemplateColumns(getGridSpace(window.width, 260, 20));
        Dimensions.addEventListener("change", setGrids);
        return () => removeEventListener("change", setGrids);
    }, []);

    const renderItem = ({ item }) => (
        <Movie movie={item} navigation={props.navigation} />
    );

    return (
        <View style={styles.container}>
            {movies ? (
                <FlatList
                    contentContainerStyle={{
                        display: "grid",
                        gridTemplateColumns: gridTemplateColumns,
                    }}
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <ActivityIndicator size={40} color="white" />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4e73df",
    },
});
