import { Provider } from "react-redux";
import { configureStore } from "./store/index.jsx";

export const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
)