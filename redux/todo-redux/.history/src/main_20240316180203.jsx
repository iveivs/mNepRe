import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "./store/index.jsx";

import "./index.css";
import { Root } from "./Root.jsx";



const store =  configureStore()

ReactDOM.createRoot(document.getElementById("root")).render(
    <Root store={store} />,
);
