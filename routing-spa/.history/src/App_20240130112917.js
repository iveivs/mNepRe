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
        <Route path="/" ele={Home} />
        <Route path="/about" ele={About} />
        <Route path="/contacts" ele={Contact} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;