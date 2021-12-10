import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useResource } from "react-request-hook";
import { getNowPlayingMovies } from "../../services/api";
import Movie from "../../components/Movie";

export default function MovieList({
  navigation,
  movieWidth = 250,
  movieHeigth = 375,
  movieMargin = 10,
}) {
  const [numColumns, setNumColumns] = useState(
    Math.floor(Dimensions.get("window").width / (movieWidth + movieMargin * 2))
  );
  const [response] = useResource(getNowPlayingMovies, []);
  const { data: movies, isLoading, error } = response;

  useEffect(() => {
    const setGrids = ({ window }) =>
      setNumColumns(
        Math.floor(
          Dimensions.get("window").width / (movieWidth + movieMargin * 2)
        )
      );

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
      {isLoading && (
        <ActivityIndicator
          size={40}
          color="white"
          style={{ height: Dimensions.get("window").height - 64 }}
        />
      )}
      {movies && movies?.length > 0 && (
        <FlatList
          key={numColumns}
          numColumns={numColumns}
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e73df",
  },
});
