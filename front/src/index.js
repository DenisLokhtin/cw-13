import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import App from './App';
import store from "./store/configureStore";
import 'react-toastify/dist/ReactToastify.css';
import CustomNavigate from "./components/CustomNavigate/CustomNavigate";

const app = (
    <Provider store={store}>
        <BrowserRouter>
                <ToastContainer position="bottom-right"/>
                <CustomNavigate/>
                <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));