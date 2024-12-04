import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useInput from "../useInput";

function Search() {
  const [searchMovies, setSearchMovies] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const title = useInput("");

  useEffect(() => {
    const theMovie = async () => {
      try {
        const wantedMovie = await axios({
          method: "GET",
          url: "https://api.themoviedb.org/3/search/movie",
          params: {
            api_key: "06363a5265575382628ad860813c7cc1",
            query: title.value,
          },
        });
        setSearchMovies(wantedMovie.data.results);
      } catch (err) {
        console.error(err);
      }
    };
    if (title.value && isSubmitted) {
      theMovie();
    }
  }, [isSubmitted, title.value]);

  function submitForm(event) {
    event.preventDefault();
    setIsSubmitted(!isSubmitted);
  }

  console.log(searchMovies);

  return (
    <>
      <div className="bg-body-tertiary pb-4 shadow-sm">
        <div className="container">
          <div className="d-flex align-items-center div-title-search">
            <label
              htmlFor="movieName"
              className="text-black fw-bold text-start fs-2 pt-4 title-buscador"
            >
              Search your favourite movies...
            </label>
            <NavLink className="text-decoration-none text-black ms-auto" to="/">
              <img
                className="img-fluid logo-image-search py-2"
                src="/logo-negro.png"
                alt="logo de marca"
              />
            </NavLink>
          </div>
          <form onSubmit={submitForm} className="d-flex">
            <input
              {...title}
              className="form-control input-search"
              placeholder="Write the title..."
              type="text"
              name="movieName"
              id="movieName"
            />
            <button
              type="submit"
              className="btn btn-info fw-bold button-search"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-5 text-white">
        <div>
          {searchMovies === null ? (
            <p className="fs-5 fw-medium paragraph-search-styles text-light">
              No movies were found. Search again, please.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          {searchMovies &&
            searchMovies.map((movie) => (
              <div key={movie.id} className="col-md-6 col-lg-4">
                <div className="mb-3 text-center">
                  <img
                    className="img-fluid img-styles shadow rounded"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <p className="fw-bold me-1">
                    {movie?.vote_average.toFixed(1)}{" "}
                  </p>
                  <i className="bi bi-star-fill stars-style"></i>
                  {movie.vote_average > 1.95 ? (
                    <i className="bi bi-star-fill stars-style"></i>
                  ) : (
                    ""
                  )}
                  {movie.vote_average > 3.95 ? (
                    <i className="bi bi-star-fill stars-style"></i>
                  ) : (
                    ""
                  )}
                  {movie.vote_average > 5.95 ? (
                    <i className="bi bi-star-fill stars-style"></i>
                  ) : (
                    ""
                  )}
                  {movie.vote_average > 7.95 ? (
                    <i className="bi bi-star-fill stars-style"></i>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Search;
