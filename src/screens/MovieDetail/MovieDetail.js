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

export default function MovieDetail({ route, navigation }) {
  const { data, isLoading, error } = useSelector((state) => state.movie);

  return (
    <ScrollView style={{ width: "100%" }}>
      {isLoading && (
        <ActivityIndicator
          size={40}
          color="#4e73df"
          style={{ height: Dimensions.get("window").height - 64 }}
        />
      )}
      {!isLoading && (
        <View style={styles.content}>
          <DetailPoster data={data} />
          <View style={{ margin: 20 }}>
            <DetailInfo data={data} />
            <Text style={styles.title}>Cast</Text>
            <ListSection ListComponent={CastList} name="cast" />
            <Text style={styles.title}>Similars</Text>
            <ListSection
              name="similars"
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
