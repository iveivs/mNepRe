import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";

import { ContextProvider } from "./context";

function App() {
  return (
    <>
    <Header />
    <ContextProvider>

      
    </ContextProvider>
    <Shop  />
    <Footer />
    </>
  );
}

export default App;
