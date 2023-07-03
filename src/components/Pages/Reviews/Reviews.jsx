import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "..Api/";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const CAST_URL = `3/movie/${Number(movieId)}/reviews`;

  useEffect(() => {
    getData(CAST_URL)
      .then((response) => {
        setReviews([...response.data.results]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [CAST_URL]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        reviews
          .filter((review, index) => index < 20)
          .map((review) => {
            const { id, author_details, content } = review;
            const { username } = author_details;
            return (
              <li key={id}>
                <h3>{username}</h3>
                <p>{content}</p>
              </li>
            );
          })
      )}
    </ul>
  );
};

export default Reviews;
