import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function Movie(props) {
    const {
        title,
        poster,
        releaseDate,
        voteAverage,
        width = 260,
        height = 390,
    } = props;
    const badAverage = voteAverage >= 5 ? "yellow" : "red";
    const goodAverage = voteAverage >= 7.5 ? "green" : badAverage;
    const averagePercent = voteAverage * 10;
    const releaseDateString = new Date(releaseDate).toDateString();
    const circularProgressStyle = {
        position: "absolute",
        right: 10,
        backgroundColor: "black",
        borderRadius: 50,
    };
    return (
        <View style={[styles.card, { width }]}>
            <TouchableOpacity>
                <Image
                    source={{ uri: poster }}
                    style={[styles.image, { height }]}
                />
            </TouchableOpacity>
            <AnimatedCircularProgress
                style={{
                    ...circularProgressStyle,
                    top: height - 20,
                }}
                rotation={0}
                size={30}
                width={3}
                fill={parseInt(averagePercent)}
                tintColor={goodAverage}
            >
                {(fill) => <Text style={styles.text}>{fill}</Text>}
            </AnimatedCircularProgress>
            <View style={styles.info}>
                <TouchableOpacity>
                    <Text style={[styles.text, styles.title]}>{title}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{releaseDateString}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: "#01192e",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7.5,
    },
    image: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    circularProgress: {
        position: "absolute",
        right: 10,
        backgroundColor: "black",
        borderRadius: 50,
    },
    info: {
        padding: 10,
    },
    title: { fontWeight: "bold" },
    text: {
        color: "white",
        fontSize: 16,
    },
});
