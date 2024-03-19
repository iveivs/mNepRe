
import { Provider } from "react-redux";
import App from "./App.jsx";

export const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
)