import React from 'react';
import {CssBaseline} from "@mui/material";
import Header from "../Toolbar/Header/Header";

const Layout = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
                <div style={{flex: '1 1 auto'}}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;