import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="image-back text-white shadow">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img
                className="img-fluid logo-image"
                src="../src/assets/logo-marca.png"
                alt="logo de marca"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                >
                  Home
                </NavLink>
                <span className="mx-2">|</span>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                >
                  About
                </NavLink>
                <span className="mx-2">|</span>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                >
                  Contact
                </NavLink>
                <span className="mx-2">|</span>
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                >
                  Search
                </NavLink>
                <span className="mx-2">|</span>
                <NavLink
                  to="/paginacion"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                >
                  Pages
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="py-5 text-center text-light">
          <h1 className="fw-bold mb-3 my-text-shadow">
            Enjoy Your Movie Playground
          </h1>
          <p className="my-text-shadow">
            Unlock the hidden misteries inside your screen
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
