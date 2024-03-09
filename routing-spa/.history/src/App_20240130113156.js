import { Routes, Route, Link} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";



function App() {
  return (
    <>
    <Header />
    <main className="container content">
      <Routes>
        <Route path="/" element={<About} />
        <Route path="/about" element={About} />
        <Route path="/contacts" element={Contact} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;