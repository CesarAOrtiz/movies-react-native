import React from "react";
import { ActivityIndicator, Text, StyleSheet } from "react-native";
import { useResource } from "react-request-hook";
import { getSimilars } from "../../services/api";
import SimilarList from "../SimilarsList";

export default function SimilarsSection({ id, navigation }) {
  const [response] = useResource(getSimilars, [id]);
  const { data, isLoading, error } = response;

  if (isLoading) {
    return (
      <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
    );
  }

  return (
    <>
      {data && (
        <>
          <Text style={styles.title}>Similars</Text>
          <SimilarList data={data} navigation={navigation} />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
