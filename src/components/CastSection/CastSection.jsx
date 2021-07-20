import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TMDB from "../../services/TMDB";
import CastList from "../../components/CastList/CastList";

export default function CastSection({ id }) {
    const [cast, setCast] = useState([]);

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
    }, []);

    return (
        <View>
            <Text style={styles.title}>Actores</Text>
            <CastList cast={cast} />
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
});
