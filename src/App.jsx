import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import ModalComponent from "./components/ModalComponent";
import { Outlet } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [thisMovie, setThisMovie] = useState(null);

  return (
    <>
      <Header />
      <Outlet thisMovie={thisMovie} />
      <ModalComponent
        thisMovie={thisMovie}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Movies
        thisMovie={thisMovie}
        setThisMovie={setThisMovie}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default App;
