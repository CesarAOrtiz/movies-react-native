import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Cast({ actor }) {
    if (!actor) return null;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: actor.profilePath }}
                style={styles.actorImage}
            />
            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>{actor.name}</Text>
                <Text style={styles.actorCharacter}>{actor.character}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        marginLeft: 20,
        paddingRight: 15,
        elevation: 9,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7.5,
    },
    actorImage: {
        width: 50,
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
    actorName: { fontSize: 18, fontWeight: "bold" },
    actorCharacter: { fontSize: 16, opacity: 0.7 },
});
