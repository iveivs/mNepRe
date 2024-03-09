import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Header />
    <main className="container content">
      
    </main>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/contacts" element={<Contact  />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;