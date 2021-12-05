import React from "react";
import {
    FlatList,
    Text,
    View,
    ActivityIndicator,
    Platform,
} from "react-native";
import Movie from "../Movie";

export default function SimilarList({ title, movies, navigation }) {
    const renderItem = ({ item }) => (
        <Movie
            movie={item}
            imgWidth={140}
            imgHeight={210}
            cardMargin={10}
            navigation={navigation}
            backgroundColor="white"
            color="black"
        />
    );

    return (
        <View>
            {title && (
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {title}
                </Text>
            )}

            {movies?.length > 0 ? (
                <FlatList
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={Platform.OS === "web"}
                />
            ) : (
                <ActivityIndicator
                    size={35}
                    color="grey"
                    style={{ marginTop: 20 }}
                />
            )}
        </View>
    );
}
