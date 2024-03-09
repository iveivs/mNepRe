import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";




function App() {
  return (
    <>  
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/contacts" element={<Contact  />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;