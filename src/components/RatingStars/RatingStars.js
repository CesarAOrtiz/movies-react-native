import React from "react";
import { AirbnbRating } from "react-native-ratings";
import TMDB from "../../services/TMDB";

const reviews = [
    "Terrible",
    "Bad",
    "Meh",
    "Average",
    "Ok",
    "Good",
    "Very Good",
    "Wow",
    "Amazing",
    "Unbelievable",
];

export default function RatingStars({
    sessionId,
    movieId,
    onRate,
    defaultRating = 0,
}) {
    async function ratingCompleted(rating) {
        const { success } = await new TMDB().rate(sessionId, movieId, rating);

        if (success && onRate) {
            onRate((prev) => (prev ? { ...prev, [movieId]: rating } : prev));
        }
    }

    return (
        <AirbnbRating
            count={10}
            reviews={reviews}
            defaultRating={defaultRating}
            size={20}
            onFinishRating={ratingCompleted}
            style={{ marginBottom: 10 }}
        />
    );
}
