import React from "react";
import { Text, View, StyleSheet } from "react-native";
import RatingStars from "../../RatingStars/RatingStars";

export default function DetailInfo({ movie }) {
    return (
        <>
            <Text style={[styles.title, { color: "#4e73df" }]}>
                {movie.title}
            </Text>
            <RatingStars />
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.subtitle}>{movie.overview}</Text>
            <Text style={styles.title}>Release date</Text>
            <Text style={styles.subtitle}>
                {movie.releaseDate &&
                    new Date(movie.releaseDate).toDateString()}
            </Text>
            <Text style={styles.title}>Genres</Text>
            <Text style={styles.subtitle}>
                {movie.genres.map((g) => g.name).join(", ")}
            </Text>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.title}>Actores</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: { fontSize: 16 },
});
