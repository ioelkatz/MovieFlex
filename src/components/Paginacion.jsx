import { useState, useEffect } from "react";
import axios from "axios";
import Stars from "./Stars";
import Header from "./Header";

function Movies({ setThisMovie, setShowModal }) {
  const [rating, setRating] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const movieInfo = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          api_key: "06363a5265575382628ad860813c7cc1",
          page: page,
          sort_by: "popularity",
          "vote_count.gte": 2000,
          "vote_average.gte": rating * 2 - 2,
        },
      });
      const newMovies = movieInfo.data.results;
      setMovieList(newMovies);
    };
    getMovies();
  }, [rating, page]);

  function addPage() {
    setPage(page + 1);
  }

  const openModal = (movie) => {
    setThisMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <div className="container text-white">
        <Stars setRating={setRating} />
        <div className="row py-3 px-2">
          {movieList &&
            movieList.map((movie) => (
              <div
                className="col-md-6 col-xl-4"
                key={movie.id}
                onClick={() => openModal(movie)}
              >
                <div className="text-center poster-style">
                  <img
                    className="img-fluid img-styles mb-3 shadow rounded"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                  />

                  <div className="d-flex justify-content-center">
                    <p className="fw-bold text-center me-2">
                      {movie.vote_average.toFixed(1)}
                    </p>
                    <p>
                      <i className="bi bi-star-fill text-warning"></i>
                      {movie.vote_average >= 1.95 ? (
                        <i className="bi bi-star-fill text-warning"></i>
                      ) : (
                        ""
                      )}
                      {movie.vote_average >= 3.95 ? (
                        <i className="bi bi-star-fill text-warning"></i>
                      ) : (
                        ""
                      )}
                      {movie.vote_average >= 5.95 ? (
                        <i className="bi bi-star-fill text-warning"></i>
                      ) : (
                        ""
                      )}
                      {movie.vote_average >= 7.95 ? (
                        <i className="bi bi-star-fill text-warning"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <footer className="pb-5 pt-2">
        <div className="container d-flex justify-content-center">
          <button
            onClick={() => setPage(page - 1)}
            className="btn btn-outline-light me-1 shadow-sm button-paginacion-styles"
          >
            <i className="bi bi-arrow-left me-1"></i> Previous
          </button>
          <button
            onClick={() => setPage(1)}
            className="btn btn-outline-light me-1 shadow-sm button-paginacion-styles"
          >
            1
          </button>
          <button
            onClick={() => setPage(2)}
            className="btn btn-outline-light me-1 shadow-sm button-paginacion-styles"
          >
            2
          </button>
          <button
            onClick={() => setPage(3)}
            className="btn btn-outline-light me-1 shadow-sm button-paginacion-styles"
          >
            3
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="btn btn-outline-light shadow-sm button-paginacion-styles button-next-styles"
          >
            Next <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </footer>
    </>
  );
}

export default Movies;
