import React from "react";
import {Route, Routes,} from "react-router-dom";
import Main from "./containers/Main/Main";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Layout from "./components/UI/Layout/Layout";
import './App.css'
import AddResto from "./containers/AddResto/AddResto";
import RestoInfo from "./containers/RestoInfo/RestoInfo";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route element={<Main/>} path="/"/>
                <Route element={<Register/>} path="/register"/>
                <Route element={<Login/>} path="/login"/>
                <Route element={<AddResto/>} path="/AddResto"/>
                <Route element={<RestoInfo/>} path="/Resto/:id"/>
            </Routes>
        </Layout>
    )
};

export default App;