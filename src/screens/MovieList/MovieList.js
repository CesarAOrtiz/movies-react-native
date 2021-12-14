import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/actions/movies";
import Movie from "../../components/Movie";
let n = 0;
export default function MovieList({
  navigation,
  movieWidth = 250,
  movieHeigth = 375,
  movieMargin = 10,
}) {
  const dispatch = useDispatch();
  const {
    data: movies,
    isLoading,
    error,
  } = useSelector((state) => state.movies);

  const getGrids = () =>
    Math.floor(Dimensions.get("window").width / (movieWidth + movieMargin * 2));

  const [numColumns, setNumColumns] = useState(getGrids());

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  // useEffect(() => {
  //   if (movies.length > 0 && n < 3) {
  //     dispatch(fetchMovies());
  //     n += 1;
  //   }
  // }, [movies]);

  useEffect(() => {
    const setGrids = () => setNumColumns(getGrids());

    const suscription = Dimensions.addEventListener("change", setGrids);
    return () => suscription?.remove();
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
