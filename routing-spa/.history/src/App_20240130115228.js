import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Routes, Route, Link, Router } from "react-router-dom";
import { useRoutes } from "react-router-dom";



function App() {
  return (
    <>  
      <header>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contacts">Contacts</a>
      </header>
      <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
      </Routes>
      
    </>
  );
}

export default App;