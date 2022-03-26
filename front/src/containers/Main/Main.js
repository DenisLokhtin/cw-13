import React, {useEffect} from 'react';
import CardResto from "../../components/CardResto/CardResto";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardsRequest} from "../../store/actions/restoAction";

const Main = () => {
    const restorans = useSelector(state => state.resto.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCardsRequest())
    }, []);

    return (
        <Container style={{marginTop: 50}}>
            {restorans ?
                restorans.map((elem) => {
                    return (
                        <CardResto
                            key={elem._id}
                            id={elem._id}
                            image={elem.image}
                            title={elem.title}
                        />
                    )
                })
                :
                (<h2>Ресторанов ещё не добавлено</h2>)}
        </Container>
    )
};

export default Main;