import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Cast from "./Cast/Cast";

export default function CastList({ cast }) {
    return (
        <View>
            {cast ? (
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Cast actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
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
