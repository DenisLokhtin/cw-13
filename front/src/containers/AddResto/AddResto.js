import React, {useState} from 'react';
import Container from "@mui/material/Container";
import {Checkbox, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addCardsRequest} from "../../store/actions/restoAction";
import Button from "@mui/material/Button";

const AddResto = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);

    const [resto, setResto] = useState({
        title: '',
        description: '',
        image: null,
        checkbox: false,
        user: user._id,
    });

    const inputChangeHandler = e => {
        let {name, value} = e.target;
        if (value === 'on') {
            value = value ? !resto.checkbox : true;
        }
        setResto(prevState => ({...prevState, [name]: value}));
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setResto(prevState => {
            return {...prevState, [name]: file};
        });
    };

    const submitFormHandler = e => {
        e.preventDefault();
        let newData = new FormData();
        for (const [key, value] of Object.entries(resto)) {
            newData.append(key, value);
        }
        dispatch(addCardsRequest(newData));
    };

    return (
        <Container style={{textAlign: "center", marginTop: 50}}>
            <h2>Добавить Ресторан</h2>
            <form onSubmit={submitFormHandler} style={{display: 'flex', flexDirection: 'column', margin: '0 auto', width: 400}}>
                <TextField name="title" onChange={e => (inputChangeHandler(e))} type="text" placeholder="Название"
                           required={true} style={{marginBottom: '10px'}}/>
                <TextField name="description" onChange={e => (inputChangeHandler(e))} type="text" placeholder="Описание"
                           required={true} style={{marginBottom: '10px'}} multiline rows={8}/>
                <TextField name="image" onChange={e => (fileChangeHandler(e))} type="file" placeholder="Изображение"
                           required={true} style={{marginBottom: '10px'}}/>
                <div style={{marginTop: 10, marginBottom: 10}}>
                    <Checkbox name='checkbox' onClick={e => inputChangeHandler(e)} style={{float: 'left'}} required/>
                    <span>Я даю согласие на публичное использование введённый мною данных</span>
                </div>
                <Button variant="contained" type="submit" style={{width: 400}}
                        disabled={(resto.title === '' || resto.description === '' || resto.image === '' || !resto.checkbox)}>Send</Button>
            </form>
        </Container>
    )
};

export default AddResto;