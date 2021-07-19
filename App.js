import React from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "./src/components/MovieList/MovieList";
import MovieDetail from "./src/components/MovieDetail/MovieDetail";

export default function App(props) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.content}>
            <StatusBar style="dark-content" />
        </View> */}
            <MovieList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4e73df",
    },
});
// const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
//     Dimensions.get("window");
// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
//     Dimensions.get("screen");
