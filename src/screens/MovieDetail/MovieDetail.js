import React, { useEffect, useState } from "react";
import { Dimensions, View, ActivityIndicator, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TMDB from "../../services/TMDB";
import DetailPoster from "../../components/DetailPoster";
import DetailInfo from "../../components/DetailInfo";
import CastSection from "../../components/CastSection";
import SimilarsSection from "../../components/SimilarsSection";

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
        <ScrollView style={{ width: "100%" }}>
            {loading ? (
                <ActivityIndicator
                    size={40}
                    color="#4e73df"
                    style={{ height: Dimensions.get("window").height - 64 }}
                />
            ) : (
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
