import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import { fetchMovie } from "../../store/actions/movie";
import { fetchCast } from "../../store/actions/cast";
import { fetchSimilars } from "../../store/actions/similars";

export default function Movie({
  movie,
  navigation,
  imgWidth = 260,
  imgHeight = 390,
  cardMargin = 10,
  backgroundColor = "#01192e",
  color = "white",
}) {
  const dispatch = useDispatch();

  const { title, poster, releaseDate, voteAverage, id } = movie;

  const releaseDateString = new Date(releaseDate).toDateString();

  const onPress = (e) => {
    dispatch(fetchMovie(id));
    dispatch(fetchCast(id));
    dispatch(fetchSimilars(id));
    navigation.navigate("Details", { id, title });
  };

  return (
    <View
      style={[
        styles.card,
        { width: imgWidth, margin: cardMargin, backgroundColor },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: poster }}
          style={[styles.image, { height: imgHeight }]}
        />
      </TouchableOpacity>
      <CircularProgressBar
        top={imgHeight - 20}
        right={10}
        progress={voteAverage}
      />
      <View style={styles.info}>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[styles.text, styles.title, { color }]}
            numberOfLines={1}
            ellipsizeMode="clip"
          >
            {title}
          </Text>
        </TouchableOpacity>

        <Text style={[styles.text, { color }]}>{releaseDateString}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#01192e",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 7.5,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  info: { padding: 10 },
  title: { fontWeight: "bold" },
  text: { color: "white", fontSize: 16 },
});
