import React, { useEffect, useState } from "react";
import { Dimensions, View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRated } from "../../contexts/RatedContext";
import TMDB from "../../services/TMDB";
import DetailPoster from "../../components/DetailPoster/DetailPoster";
import DetailInfo from "../../components/DetailInfo/DetailInfo";
import CastSection from "../../components/CastSection/CastSection";
import SimilarsSection from "../../components/SimilarsSection/SimilarsSection";

export default function MovieDetail({ route, navigation }) {
  const { id } = route.params;
  const { rated, setRated } = useRated();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movie = await new TMDB().getMovie(id);
        setMovie(movie);
      } catch (error) {
        return navigation.navigate("Home");
      }
      setLoading(false);
    }
    fetchMovie();
  }, [id]);

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          size={40}
          color="#4e73df"
          style={{ height: Dimensions.get("window").height - 64 }}
        />
      ) : (
        <>
          <DetailPoster movie={movie} />
          <View style={{ margin: 20 }}>
            <DetailInfo movie={movie} rated={rated} setRated={setRated} />
            <CastSection id={id} />
            <SimilarsSection id={id} navigation={navigation} />
          </View>
        </>
      )}
    </ScrollView>
  );
}
