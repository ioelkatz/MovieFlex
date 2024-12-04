import { NavLink } from "react-router-dom";
import Header from "./Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="container py-5 text-white">
        <h1>Contact Us</h1>
        <p>
          Due to numerous requests from our beloved users to update the 
          <NavLink className="mx-1 text-white" to="/">Movie Catalog.</NavLink> We have decided to let our
          precious costumers to give us feedback by recommending us which movies
          to upload to our website.
        </p>
        <hr />
        <p>
          Feel free to call us to the following number
          <i className="bi bi-telephone-fill mx-1"></i>
          +1 1037 7777
        </p>
      </div>
    </>
  );
}

export default Contact;
