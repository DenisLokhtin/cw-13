import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/actions/usersAction";
import Container from "@mui/material/Container";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Register = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: '',
        name: '',
        password: '',
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name]: value}));
    };

    const submitFormHandler = e => {
        e.preventDefault();
        dispatch(registerUser({...user}));
    };

    return (
        <Container style={{marginTop: 50}}>
            <form onSubmit={submitFormHandler} style={{textAlign: 'center'}} className="authorization">
                <h2>Register</h2>
                <Grid style={{display: 'flex', flexDirection: 'column', width: 300, margin: '0 auto'}}>
                    <TextField name="email" onChange={e => (inputChangeHandler(e))} type="email" placeholder="email"
                               required={true} style={{marginBottom: '10px'}}/>
                    <TextField name="name" onChange={e => (inputChangeHandler(e))} type="text" placeholder="name"
                               required={true} style={{marginBottom: '10px'}}/>
                    <TextField name="password" onChange={e => (inputChangeHandler(e))} type="password"
                               placeholder="password" required={true} style={{marginBottom: '10px'}}/>
                </Grid>
                <Button variant="contained" type="submit" style={{width: 300}}>Send</Button>
            </form>
        </Container>
    );
};

export default Register;