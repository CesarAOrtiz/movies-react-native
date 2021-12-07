import React from "react";
import { Dimensions, View, ActivityIndicator, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useResource } from "react-request-hook";
import { getMovie } from "../../services/api";
import DetailPoster from "../../components/DetailPoster";
import DetailInfo from "../../components/DetailInfo";
import CastSection from "../../components/CastSection";
import SimilarsSection from "../../components/SimilarsSection";

export default function MovieDetail({ route, navigation }) {
  const { id } = route.params;
  const [response] = useResource(getMovie, [id]);
  const { data: movie, isLoading, error } = response;

  return (
    <ScrollView style={{ width: "100%" }}>
      {isLoading && (
        <ActivityIndicator
          size={40}
          color="#4e73df"
          style={{ height: Dimensions.get("window").height - 64 }}
        />
      )}
      {movie && (
        <View style={styles.content}>
          <DetailPoster movie={movie} />
          <View style={{ margin: 20 }}>
            <DetailInfo movie={movie} />
            <CastSection id={id} />
            <SimilarsSection id={id} navigation={navigation} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    maxWidth: 1024,
    margin: "auto",
  },
});
