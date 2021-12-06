import React from "react";
import { FlatList, Platform } from "react-native";
import Movie from "../Movie";

export default function SimilarList({ movies, navigation }) {
  const renderItem = ({ item }) => (
    <Movie
      movie={item}
      imgWidth={140}
      imgHeight={210}
      cardMargin={10}
      navigation={navigation}
      backgroundColor="white"
      color="black"
    />
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
    />
  );
}
