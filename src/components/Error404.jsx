import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <section className="h-100">
      <div className="container mt-5 text-center d-flex justify-content-center">
        <div className="shadow border py-5 px-4 rounded">
          <div className="d-flex justify-content-center mb-3">
            <h1>❌</h1>
            <h1 className="title-error-style">ERROR 404</h1>
            <h1>❌</h1>
          </div>
          <div className="d-flex flex-column justify-content-center py-3 my-0">
            <p className="text-black fs-2 fw-bold">This Page Does Not Exist</p>
            <p className="text-black fs-3 fw-bold">
              Go Back From Where You Came
            </p>
            <NavLink className="fw-bold text-decoration-none fs-5" to="/">
              Press this link to return back home
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
