import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TMDB from "../../services/TMDB";
import DetailPoster from "./DetailPoster/DetailPoster";
import DetailInfo from "./DetailInfo/DetailInfo";
import CastSection from "../../components/CastSection/CastSection";
import SimilarSection from "../../components/SimilarSection/SimilarSection";

export default function MovieDetail({ route, navigation }) {
    const { id } = route.params;
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
                    style={{ height: "calc(100vh - 64px)" }}
                />
            ) : (
                <>
                    <DetailPoster movie={movie} />
                    <View style={{ margin: 20 }}>
                        <DetailInfo movie={movie} />
                        <CastSection id={id} />
                        <SimilarSection id={id} navigation={navigation} />
                    </View>
                </>
            )}
        </ScrollView>
    );
}
