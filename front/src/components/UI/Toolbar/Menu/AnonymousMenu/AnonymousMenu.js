import React from 'react';
import {Link} from "react-router-dom";

const AnonymousMenu = () => {
    return (
        <div>
            <Link to="/register" className="link">Register</Link> or <Link to="/login" className="link">Login</Link>
        </div>
    );
};

export default AnonymousMenu;