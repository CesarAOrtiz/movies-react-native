import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TMDB from "../../services/TMDB";
import CastList from "../../components/CastList/CastList";
import DetailInfo from "./DetailInfo/DetailInfo";

export default function MovieDetail({ route, navigation }) {
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);

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

    useEffect(() => {
        async function fetchCast() {
            try {
                const cast = await new TMDB().getMovieCast(id);
                setCast(cast);
            } catch (error) {
                setCast([]);
            }
        }
        fetchCast();
    }, [id]);

    return (
        <ScrollView style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size={40}
                    color="#4e73df"
                    style={{ height: "calc(100vh)" }}
                />
            ) : (
                <>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageBorder}>
                            <Image
                                source={{ uri: movie.backdrop }}
                                style={styles.posterImage}
                            />
                        </View>
                    </View>
                    <View style={{ margin: 20 }}>
                        <DetailInfo movie={movie} />
                        <CastList cast={cast} />
                    </View>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    imageContainer: {
        width: "100%",
        height: "50vh",
    },
    imageBorder: {
        flex: 1,
        overflow: "hidden",
    },
    posterImage: {
        flex: 1,
    },
});
