import React from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

export default function SimilarsSection({ navigation, name, ListComponent }) {
  const { data, isLoading, error } = useSelector((state) => state[name]);

  if (isLoading) {
    return (
      <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
    );
  }

  return <ListComponent data={data} navigation={navigation} />;
}
