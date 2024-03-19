import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";

export const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={}>

                </Route>
            </Routes>
            
        </BrowserRouter>
        
    </Provider>
)