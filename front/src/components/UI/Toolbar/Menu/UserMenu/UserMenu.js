import React from 'react';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../../../store/actions/usersAction";
import {Link} from "react-router-dom";

const UserMenu = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            Hello, <Link style={{color: 'white'}} to="/myPosts"><b>{user}</b></Link>! <Link to={'/'}
                                                                                            style={{color: 'white'}}
                                                                                            onClick={() => dispatch(logoutUser())}
                                                                                            className="link">Logout</Link>
        </div>
    );
};

export default UserMenu;