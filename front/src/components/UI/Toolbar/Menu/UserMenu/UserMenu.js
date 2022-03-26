import React from 'react';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../../../store/actions/usersAction";
import {Link} from "react-router-dom";

const UserMenu = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            Hello, <span style={{color: 'white'}}><b>{user}</b></span>!
            <Link to={'/AddResto'} style={{color: 'white', marginLeft: 10}}><b>Add Resto</b></Link>
            <Link to={'/'}
                  style={{color: 'white', marginLeft: 10}}
                  onClick={() => dispatch(logoutUser())}
                  className="link">Logout</Link>
        </div>
    );
};

export default UserMenu;