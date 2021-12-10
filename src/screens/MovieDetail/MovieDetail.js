import React from "react";
import {
  Dimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DetailPoster from "../../components/DetailPoster";
import DetailInfo from "../../components/DetailInfo";
import CastList from "../../components/CastList";
import SimilarsList from "../../components/SimilarsList";
import ListSection from "../../components/ListSection";
import { useSelector } from "react-redux";

export default function MovieDetail({ navigation }) {
  const { cast, similars, ...movie } = useSelector((state) => state.movie);

  const movieReady = Object.keys(movie).length > 0;

  return (
    <ScrollView style={{ width: "100%" }}>
      {!movieReady && (
        <ActivityIndicator
          size={40}
          color="#4e73df"
          style={{ height: Dimensions.get("window").height - 64 }}
        />
      )}
      {movieReady && (
        <View style={styles.content}>
          <DetailPoster data={movie} />
          <View style={{ margin: 20 }}>
            <DetailInfo data={movie} />
            <Text style={styles.title}>Cast</Text>
            <ListSection data={cast} ListComponent={CastList} />
            <Text style={styles.title}>Similars</Text>
            <ListSection
              data={similars}
              navigation={navigation}
              ListComponent={SimilarsList}
            />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
