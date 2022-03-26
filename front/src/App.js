import React from "react";
import {Route, Routes,} from "react-router-dom";
import Main from "./containers/Main/Main";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Layout from "./components/UI/Layout/Layout";
import './App.css'

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route element={<Main/>} path="/" />
                <Route element={<Register/>} path="/register" />
                <Route element={<Login/>} path="/login" />
            </Routes>
        </Layout>
    )
};

export default App;