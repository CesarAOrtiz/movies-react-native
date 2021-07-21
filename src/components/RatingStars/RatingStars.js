import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { useSession } from "../../contexts/SessionContext";
import TMDB from "../../services/TMDB";

export default function RatingStars({
    sessionId,
    movieId,
    onRate,
    defaultRating = 0,
}) {
    const { id } = sessionId || useSession();

    async function ratingCompleted(rating) {
        const { success } = await new TMDB().rate(id, movieId, rating);

        if (success && onRate) {
            onRate((prev) => {
                if (prev) {
                    prev[movieId] = rating;
                }
                return prev;
            });
        }
    }

    const reviews = [
        "Terrible",
        "Bad",
        "Meh",
        "average",
        "OK",
        "Good",
        "Very Good",
        "Wow",
        "Amazing",
        "Unbelievable",
    ];

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
