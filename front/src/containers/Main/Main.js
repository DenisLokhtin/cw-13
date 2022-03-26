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
    }, [dispatch]);

    return (
        <Container style={{marginTop: 50, display: "flex", justifyContent: "space-between", flexWrap: 'wrap'}}>
            {restorans[0] ?
                restorans.map((elem) => {
                    return (
                        <CardResto
                            key={elem._id}
                            id={elem._id}
                            image={elem.image}
                            title={elem.title}
                            reviews={elem.userReview}
                            userImage={elem.number}
                            name={elem.user.name}
                        />
                    )
                })
                :
                (<h2>Ресторанов ещё не добавлено</h2>)}
        </Container>
    )
};

export default Main;