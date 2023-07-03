import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "Api/Api";

const HomePage = () => {
  const MOVIES_URL = `3/trending/movie/day`;
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getData(MOVIES_URL)
      .then((response) => {
        setMovies([...response.data.results]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [MOVIES_URL]);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map((film) => {
          const { original_title, id } = film;
          return (
            <li key={id} className={film}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomePage;
