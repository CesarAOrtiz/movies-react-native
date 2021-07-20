import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CircularProgressBar from "../../CircularProgressBar/CircularProgressBar";

export default function DetailInfo({ movie }) {
    return (
        <>
            <Text style={[styles.title, { color: "#4e73df" }]}>
                {movie.title}
            </Text>
            <CircularProgressBar
                top={-55}
                right={"calc(100% - 30px)"}
                progress={movie.voteAverage}
            />
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
    subtitle: { fontSizes: 16 },
});
