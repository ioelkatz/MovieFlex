import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MovieDetails() {
  const [foundMovie, setFoundMovie] = useState(null);
  const params = useParams();

  console.log(foundMovie);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${params.id}`,
        params: {
          api_key: "06363a5265575382628ad860813c7cc1",
        },
      });
      setFoundMovie(movie.data);
    };
    getMovie();
  }, []);

  return (
    foundMovie &&
    foundMovie.genres && (
      <>
        <div className="bg-body-tertiary py-5 mb-5 text-white">
          <h1 className="text-center text-black fw-bold text-decoration-underline">
            {foundMovie.title}
          </h1>
        </div>
        <div className="container mb-5 text-white">
          <div className="row">
            <>
              <div className="col-md-6 ">
                <div className="mb-4">
                  <img
                    className="img-fluid shadow rounded"
                    src={`https://image.tmdb.org/t/p/original${foundMovie?.poster_path}`}
                    alt={`${foundMovie?.title} poster`}
                  />
                </div>
              </div>
              <div className="col-md-6 text-start">
                <p className="fs-5 paragraph-styles-description">
                  <b className="me-1">Title:</b>
                  {foundMovie?.title}
                </p>
                <hr />
                <p className="fs-5 paragraph-styles-description">
                  <b className="me-1">Year:</b>
                  {foundMovie?.release_date}
                </p>
                <hr />
                <p className="fs-5 paragraph-styles-description">
                  <b className="me-1">Genres:</b>
                  {foundMovie.genres &&
                    `${foundMovie.genres[0].name},
                    ${foundMovie.genres[1].name},
                    ${foundMovie.genres[2].name}`}
                </p>
                <hr />
                <p className="fs-5 paragraph-styles-description">
                  <b className="me-1">Description:</b>
                  {foundMovie?.overview}
                </p>
                <hr />
                <p className="fs-5 paragraph-styles-description">
                  <b className="me-1">Revenue Generated:</b>
                  {`$${(foundMovie?.revenue / 1000000).toFixed()} M 💸💸💸`}
                </p>
                <hr />
                <div className="d-flex align-items-center my-0 mb-3">
                  <p className="me-2 fs-5 paragraph-styles-description">
                    <b className="me-1">Votes:</b>
                    {foundMovie?.vote_average.toFixed(1)}
                  </p>
                  <p>
                    {}
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    {foundMovie?.vote_average >= 5.95 ? (
                      <i className="bi bi-star-fill text-warning"></i>
                    ) : (
                      ""
                    )}
                    {foundMovie?.vote_average >= 7.95 ? (
                      <i className="bi bi-star-fill text-warning"></i>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <NavLink className="btn btn-success fw-bold w-100" to="/">
                  Watch more movies...
                </NavLink>
              </div>
            </>
          </div>
        </div>
      </>
    )
  );
}

export default MovieDetails;
