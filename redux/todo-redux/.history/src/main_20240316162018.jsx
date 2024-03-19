import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Root } from "./Root.jsx";

// import { Provider } from "react-redux"; 1
// import { store } from "./store/index"; 

import { configureStore } from "./store/index.jsx";

const store =  configureStore()

ReactDOM.createRoot(document.getElementById("root")).render(
    <Root store={store} />
);
