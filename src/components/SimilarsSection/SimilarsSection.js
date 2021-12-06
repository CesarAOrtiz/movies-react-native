import React, { useEffect } from "react";
import { ActivityIndicator, Text, StyleSheet } from "react-native";
import { useResource } from "react-request-hook";
import { getSimilars } from "../../services/api";
import SimilarList from "../SimilarsList";

export default function SimilarsSection({ id, navigation }) {
  const [response, request] = useResource(getSimilars);
  const { data: similars, isLoading, error, cancel } = response;

  useEffect(() => {
    request(id);
    return cancel;
  }, [id]);

  return (
    <>
      {isLoading && (
        <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
      )}
      {similars && (
        <>
          <Text style={styles.title}>Similars</Text>
          <SimilarList movies={similars} navigation={navigation} />
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
