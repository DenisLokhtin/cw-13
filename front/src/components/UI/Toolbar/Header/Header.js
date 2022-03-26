import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {useSelector} from "react-redux";
import UserMenu from "../Menu/UserMenu/UserMenu";
import {Link} from "react-router-dom";

const Header = () => {
    const user = useSelector(state => state.users.user);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        RestoAdvisor
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Link
                                sx={{my: 2, color: 'white', display: 'block'}}
                                to={'/'}
                                style={{color: 'white'}}
                            >
                                Главная
                            </Link>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        {user && user.role ? (
                            <UserMenu user={user.name}/>
                        ) : (
                            <div style={{display: 'flex'}}>
                                <div style={{marginRight: 10}}>
                                    <Link className="btn" style={{color: 'white'}} to={'/register'}>
                                        Зарегистрироваться
                                    </Link>
                                </div>
                                <div>
                                    <Link className="btn" style={{color: 'white'}} to={'/login'}>
                                        Войти
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;