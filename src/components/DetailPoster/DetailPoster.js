import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import CircularProgressBar from "../CircularProgressBar";

export default function DetailPoster({ data }) {
  const { backdrop, voteAverage } = data;

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageBorder}>
        {backdrop?.length > 0 && (
          <Image source={{ uri: backdrop }} style={styles.posterImage} />
        )}
        <CircularProgressBar
          left={20}
          bottom={20}
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
    height: Dimensions.get("window").height / 2,
  },
  imageBorder: { flex: 1, overflow: "hidden" },
  posterImage: { flex: 1 },
});
