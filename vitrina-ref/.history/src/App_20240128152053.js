import { Header } from "./components/Header";
import { Footer } from "./components/Footer.jsx";
import { Shop } from "./components/Shop.jsx";

import { ContextProvider } from "./context.js";

function App() {
  return (
    <>
    <Header />
    <ContextProvider>
        <Shop  />
    </ContextProvider>
    
    <Footer />
    </>
  );
}

export default App;
