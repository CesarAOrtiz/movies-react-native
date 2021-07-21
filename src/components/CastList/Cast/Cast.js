import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import TMDB from "../../../services/TMDB";

export default function Cast({ actor }) {
    const uri = `${new TMDB().imageCastURL}${actor.profilePath}`;

    return (
        <View style={styles.container}>
            {actor.profilePath && (
                <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                />
            )}
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
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
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
});
