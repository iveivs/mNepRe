import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";




function App() {
  return (
    <>
    <Header />
    <main className="container content">
      <Router>
        <Route path="/" component />
      </Router>
    </main>
    <Footer />
    </>
  );
}

export default App;