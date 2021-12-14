import React from "react";
import { Text, StyleSheet, View } from "react-native";
import RatingStars from "../RatingStars/RatingStars";
import { useRated } from "../../contexts/RatedContext";

export default function DetailInfo({ data }) {
  const { rated, rate } = useRated();

  const { id, title, releaseDate, overview, genres } = data;

  return (
    <View>
      <Text style={[styles.title, { color: "#4e73df" }]}>{title}</Text>
      <RatingStars movieId={id} defaultRating={rated[id] || 0} rate={rate} />
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.subtitle}>{overview}</Text>
      <Text style={styles.title}>Release date</Text>
      <Text style={styles.subtitle}>
        {new Date(releaseDate).toDateString()}
      </Text>
      <Text style={styles.title}>Genres</Text>
      <Text style={styles.subtitle}>
        {genres?.map((g) => g.name).join(", ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: { fontSize: 16 },
});
