import React, { useEffect, useState } from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
} from "react-native";
import Movie from "../../components/Movie/Movie";
import TMDB from "../../services/TMDB";

export default function MovieList({ navigation, list = [], ...props }) {
    const { movieWidth = 250, movieHeigth = 375, movieMargin = 10 } = props;
    const [movies, setMovies] = useState(list);
    const [numColumns, setNumColumns] = useState(
        Math.floor(
            Dimensions.get("window").width / (movieWidth + movieMargin * 2)
        )
    );

    useEffect(() => {
        async function loadMovies() {
            try {
                const movies = await new TMDB().getNowPlayingMovies();
                setMovies(movies);
            } catch (error) {
                console.log(error);
                setMovies([]);
            }
        }
        loadMovies();
    }, []);

    useEffect(() => {
        const setGrids = ({ window }) => {
            setNumColumns(
                Math.floor(
                    Dimensions.get("window").width /
                        (movieWidth + movieMargin * 2)
                )
            );
        };
        Dimensions.addEventListener("change", setGrids);
        return () => Dimensions.removeEventListener("change", setGrids);
    }, []);

    const renderItem = ({ item }) => (
        <Movie
            movie={item}
            imgWidth={movieWidth}
            imgHeight={movieHeigth}
            cardMargin={movieMargin}
            navigation={navigation}
        />
    );

    return (
        <View style={styles.container}>
            {movies.length > 0 ? (
                <FlatList
                    key={numColumns}
                    numColumns={numColumns}
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <ActivityIndicator
                    size={40}
                    color="white"
                    style={{ height: Dimensions.get("window").height - 64 }}
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
