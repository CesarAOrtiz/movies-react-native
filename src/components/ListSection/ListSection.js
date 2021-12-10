import React from "react";
import { ActivityIndicator } from "react-native";

export default function SimilarsSection({ navigation, data, ListComponent }) {
  if (!data) {
    return (
      <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
    );
  }

  return <ListComponent data={data} navigation={navigation} />;
}
