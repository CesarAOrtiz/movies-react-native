import React from "react";
import { ActivityIndicator, FlatList, View, Platform } from "react-native";
import Cast from "../Cast/Cast";

export default function CastList({ cast }) {
    return (
        <View>
            {cast?.length > 0 ? (
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Cast actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={Platform.OS === "web"}
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
