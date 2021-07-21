import React, { useEffect, useState } from "react";
import { AirbnbRating } from "react-native-ratings";

function ratingCompleted(rating) {}

export default function RatingStars({ defaultRating = 0 }) {
    return (
        <AirbnbRating
            count={10}
            reviews={[
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
            ]}
            defaultRating={defaultRating}
            size={20}
            onFinishRating={ratingCompleted}
            style={{ marginBottom: 10 }}
        />
    );
}
