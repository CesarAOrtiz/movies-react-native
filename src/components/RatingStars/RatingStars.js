import React from "react";
import { AirbnbRating } from "react-native-ratings";

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

export default function RatingStars({ movieId, rate, defaultRating = 0 }) {
  async function ratingCompleted(rating) {
    rate(movieId, rating);
  }

  return (
    <AirbnbRating
      count={reviews.length}
      reviews={reviews}
      defaultRating={defaultRating}
      size={20}
      onFinishRating={ratingCompleted}
      style={{ marginBottom: 10 }}
    />
  );
}
