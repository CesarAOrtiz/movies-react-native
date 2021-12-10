import React from "react";
import { FlatList, Platform } from "react-native";
import Cast from "../Cast";

export default function CastList({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, i) => item.id.toString() + `i-${i}`}
      renderItem={({ item }) => <Cast actor={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
    />
  );
}
