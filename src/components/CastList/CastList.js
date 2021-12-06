import React from "react";
import { FlatList, Platform } from "react-native";
import Cast from "../Cast";

export default function CastList({ cast }) {
  return (
    <FlatList
      data={cast}
      keyExtractor={(item, i) => item.id.toString() + `i-${i}`}
      renderItem={({ item }) => <Cast actor={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      style={{ marginTop: 10, height: 70 }}
    />
  );
}
