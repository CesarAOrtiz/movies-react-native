import React from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { useResource } from "react-request-hook";
import { getCast } from "../../services/api";
import CastList from "../CastList";

export default function CastSection({ id }) {
  const [response] = useResource(getCast, [id]);
  const { data: cast, isLoading, error } = response;

  return (
    <>
      {isLoading && (
        <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
      )}
      {cast && (
        <>
          <Text style={styles.title}>Cast</Text>
          <CastList cast={cast} />
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
