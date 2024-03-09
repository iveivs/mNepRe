import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <Route path="/" component={Home} />
        <Route path="/" component={About} />
        <Route path="/" component={Contact} />
      </Router>
    </main>
    <Footer />
    </>
  );
}

export default App;