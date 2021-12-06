import React, { useEffect } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { useResource } from "react-request-hook";
import { getCast } from "../../services/api";
import CastList from "../CastList";

export default function CastSection({ id }) {
  const [response, request] = useResource(getCast);
  const { data: cast, isLoading, error, cancel } = response;

  useEffect(() => {
    request(id);
    return cancel;
  }, [id]);

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
