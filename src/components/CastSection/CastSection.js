import React from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { useResource } from "react-request-hook";
import { getCast } from "../../services/api";
import CastList from "../CastList";

export default function CastSection({ id }) {
  const [response] = useResource(getCast, [id]);
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
          <Text style={styles.title}>Cast</Text>
          <CastList data={data} />
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
