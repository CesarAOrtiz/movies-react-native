import React from "react";
import { Image, View, StyleSheet } from "react-native";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

export default function DetailPoster({ movie }) {
    const { backdrop, voteAverage } = movie;
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageBorder}>
                <Image source={{ uri: backdrop }} style={styles.posterImage} />
                <CircularProgressBar
                    top={"calc(100% - 50px)"}
                    right={"calc(100% - 60px)"}
                    size={40}
                    width={4}
                    progress={voteAverage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: "50vh",
    },
    imageBorder: {
        flex: 1,
        overflow: "hidden",
    },
    posterImage: {
        flex: 1,
    },
});
