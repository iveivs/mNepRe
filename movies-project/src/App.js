import React from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import { moviesDBpath } from "./moviesDB";

class App extends React.Component {
  state = {
    movies: []
  }


  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
