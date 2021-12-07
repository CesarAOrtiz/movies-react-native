import React from "react";
import { Text, StyleSheet, View } from "react-native";
import RatingStars from "../RatingStars/RatingStars";
import { useSession } from "../../contexts/SessionContext";
import { useRated } from "../../contexts/RatedContext";

export default function DetailInfo({ movie }) {
  const { id } = useSession();
  const { rated, fetchRated } = useRated();
  const releaseDate = new Date(movie.releaseDate).toDateString();

  return (
    <View>
      <Text style={[styles.title, { color: "#4e73df" }]}>{movie.title}</Text>
      <RatingStars
        sessionId={id}
        movieId={movie.id}
        defaultRating={rated[movie.id] || 0}
        onRate={fetchRated}
      />
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.subtitle}>{movie.overview}</Text>
      <Text style={styles.title}>Release date</Text>
      <Text style={styles.subtitle}>{releaseDate}</Text>
      <Text style={styles.title}>Genres</Text>
      <Text style={styles.subtitle}>
        {movie.genres.map((g) => g.name).join(", ")}
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
