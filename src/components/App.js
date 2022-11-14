import React from "react";
import GifLisTContainer from "./GifListContainer";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifLisTContainer />
    </div>
  );
}

export default App;
