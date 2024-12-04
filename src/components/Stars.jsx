import { Rating } from "react-simple-star-rating";

function Stars({ setRating, setPage }) {
  const handleRating = (rate) => {
    setRating(rate);
    setPage(1);
  };

  return (
    <div className="d-flex py-5 flex-column align-items-center">
      <p className="fw-bold fs-5 text-white">Filter by rating</p>
      <Rating onClick={handleRating} />
    </div>
  );
}

export default Stars;
