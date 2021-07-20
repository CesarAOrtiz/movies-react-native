import React from "react";
import { Text, StyleSheet, View } from "react-native";
import RatingStars from "../../RatingStars/RatingStars";

export default function DetailInfo({ movie }) {
    const releaseDate = new Date(movie.releaseDate).toDateString();
    return (
        <View>
            <Text style={[styles.title, { color: "#4e73df" }]}>
                {movie.title}
            </Text>
            <RatingStars />
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
        marginVertical: 10,
    },
    subtitle: { fontSize: 16 },
});
