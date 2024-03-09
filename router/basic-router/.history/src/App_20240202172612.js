import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Blog from "./Pages/BlogPage";
import NotFound from "./Pages/NotFoundPage";
import Layout from "./components/Layout";
import { SinglePage } from "./Pages/SinglePage";
import { Createpost } from "./Pages/Createpost";

function App() {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/posts/:id" element={<SinglePage />} />
            <Route path="/posts/new" element={<Createpost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      <div>
        
      </div>
    </>
  );
}

export default App;
