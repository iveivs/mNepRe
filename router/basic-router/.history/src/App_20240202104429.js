import { Route, Routes, Link } from "react-router-dom";

import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Blog from "./Pages/BlogPage";
import NotFound from "./Pages/NotFoundPage";
import Layout from "./components/Layout";
import { SinglePage } from "./Pages/SinglePage";

function App() {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      <div>
        
      </div>
    </>
  );
}

export default App;
