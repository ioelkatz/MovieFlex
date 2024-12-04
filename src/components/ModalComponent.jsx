import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

function ModalComponent({ showModal, setShowModal, thisMovie }) {
  const closeModal = () => setShowModal(false);

  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      dialogClassName="modal-style text-black"
    >
      <Modal.Header closeButton className="p-4">
        <Modal.Title className="fw-bold text-center">
          {thisMovie?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4 px-4">
        <div className="row">
          <div className="col-6">
            <NavLink to={thisMovie && `/movie/${thisMovie.id}`}>
              <img
                className="img-fluid shadow image-modal rounded"
                src={`https://image.tmdb.org/t/p/original${thisMovie?.poster_path}`}
                alt={`${thisMovie?.title} poster`}
              />
            </NavLink>
          </div>
          <div className="col-6 text-start">
            <p>
              <b className="me-1">Title:</b>
              {thisMovie?.title}
            </p>
            <hr />
            <p>
              <b className="me-1">Year:</b>
              {thisMovie?.release_date}
            </p>
            <hr />
            <p>
              <b className="me-1">Description:</b>
              {`${thisMovie?.overview.slice(0, 125)}...`}
            </p>
            <hr />
            <div className="d-flex align-items-center my-0">
              <p className="me-2">
                <b className="me-1">Votes:</b>
                {thisMovie?.vote_average.toFixed(1)}
              </p>
              <p>
                {}
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                {thisMovie?.vote_average >= 5.95 ? (
                  <i className="bi bi-star-fill text-warning"></i>
                ) : (
                  ""
                )}
                {thisMovie?.vote_average >= 7.95 ? (
                  <i className="bi bi-star-fill text-warning"></i>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <NavLink
          to={thisMovie && `/movie/${thisMovie.id}`}
          className="btn btn-primary fw-bold w-100"
        >
          Learn more...
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
