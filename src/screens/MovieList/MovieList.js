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

export default function MovieList({
  navigation,
  movieWidth = 250,
  movieHeigth = 375,
  movieMargin = 10,
}) {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movies);

  const getGrids = () =>
    Math.floor(
      Dimensions.get("window").width / (movieWidth + (movieMargin + 5) * 2)
    );

  const [numColumns, setNumColumns] = useState(getGrids());

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

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
      {data && data?.length > 0 && (
        <FlatList
          key={numColumns}
          numColumns={numColumns}
          horizontal={false}
          data={data}
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
