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
    const [loading, setLoading] = useState(true);

    const movieWidth = 250;
    const movieHeigth = 375;
    const movieMargin = 10;

    const [gridTemplateColumns, setGridTemplateColumns] = useState(
        getGridSpace(
            Dimensions.get("window").width,
            movieWidth,
            movieMargin * 2
        )
    );

    useEffect(() => {
        async function loadMovies() {
            try {
                const movies = await new TMDB().getNowPlayingMovies();
                setMovies(movies);
            } catch (error) {
                setMovies([]);
            }
            setLoading(false);
        }
        loadMovies();
    }, []);

    useEffect(() => {
        const setGrids = ({ window }) =>
            setGridTemplateColumns(getGridSpace(window.width, movieWidth, 20));
        Dimensions.addEventListener("change", setGrids);
        return () => Dimensions.removeEventListener("change", setGrids);
    }, []);

    const renderItem = ({ item }) => (
        <Movie
            movie={item}
            imgWidth={movieWidth}
            imgHeight={movieHeigth}
            cardMargin={movieMargin}
            navigation={props.navigation}
        />
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size={40}
                    color="white"
                    style={{ height: "calc(100vh - 64px)" }}
                />
            ) : (
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

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4e73df",
    },
});
