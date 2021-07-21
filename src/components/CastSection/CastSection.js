import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TMDB from "../../services/TMDB";
import CastList from "../CastList/CastList";

export default function CastSection({ id, providedCast = [] }) {
    const [cast, setCast] = useState(providedCast);

    useEffect(() => {
        async function fetchCast() {
            try {
                const cast = await new TMDB().getCast(id);
                setCast(cast);
            } catch (error) {
                setCast([]);
            }
        }
        if (providedCast.length <= 0) fetchCast();
    }, []);

    return (
        <View>
            <Text style={styles.title}>Cast</Text>
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
