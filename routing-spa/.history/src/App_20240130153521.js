import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";




function App() {
  return (
    <>  
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>
      </header>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/" element={<Home  />} />
        <Route path="/" element={<Home  />} />
      </Routes>
    </>
  );
}

export default App;