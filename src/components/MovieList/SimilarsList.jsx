import React from "react";
import { FlatList, Text, View } from "react-native";
import Movie from "./Movie/Movie";

export default function HorizontalSlider({ title, movies, navigation }) {
    return (
        <View style={{ height: 355 }}>
            {title && (
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {title}
                </Text>
            )}

            {movies.length > 0 && (
                <FlatList
                    data={movies}
                    renderItem={({ item }) => (
                        <Movie
                            movie={item}
                            imgWidth={140}
                            imgHeight={210}
                            cardMargin={10}
                            navigation={navigation}
                            backgroundColor="white"
                            color="black"
                            showInfo={false}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </View>
    );
}
