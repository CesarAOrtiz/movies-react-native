import React, { useEffect } from "react";
import { AirbnbRating } from "react-native-ratings";
import { useResource } from "react-request-hook";
import { rate } from "../../services/api";

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
  const [response, request] = useResource(rate);
  const { data, error } = response;

  async function ratingCompleted(rating) {
    request(sessionId, movieId, rating);
  }

  useEffect(() => {
    if (data?.success && onRate) {
      onRate();
    }
  }, [data]);

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
