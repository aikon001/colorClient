import "react-hot-loader/patch"
import './index.css';
import './App.css'
import App from './App'
import { render } from "react-dom";
import store from "./Redux/store";
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
        </Provider>,
   rootElement
);

