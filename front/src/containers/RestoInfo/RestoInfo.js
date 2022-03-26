import React, {useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneCardsRequest} from "../../store/actions/restoAction";
import {useParams} from "react-router-dom";
import {ImageList, ImageListItem, Rating, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const RestoInfo = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const restoran = useSelector(state => state.resto.oneCard);
    const user = useSelector(state => state.users.user);
    const [img, setImg] = useState({
        image: null,
        User: user ? user._id : null,
        Resto: id,
    });

    const [review, setReview] = useState({
        description: '',
        ReviewFood: 0,
        ReviewQuality: 0,
        ReviewInterior: 0,
        User: user ? user._id : null,
        Resto: id,
    });

    const result = () => {
        if (restoran.userReview) {
            let sum = 0;
            restoran.userReview.map((item) => {
                sum += ((item.ReviewFood + item.ReviewQuality + item.ReviewInterior) / 3) / restoran.userReview.length;
            })
            return (Math.round(sum * 10) / 10);
        }
    };

    const resultOnce = (name) => {
        if (restoran.userReview) {
            if (name === 'ReviewFood') {
                let sum = 0;
                        restoran.userReview.map((item) => {
                            sum += (item.ReviewFood) / restoran.userReview.length;
                            console.log(name)
                        })

                        return (Math.round(sum * 10) / 10);
            } else if (name === 'ReviewInterior') {
                let sum = 0;
                        restoran.userReview.map((item) => {
                            sum += (item.ReviewInterior) / restoran.userReview.length;
                            console.log(name)
                        })

                        return (Math.round(sum * 10) / 10);
            } else if (name === 'ReviewQuality') {
                let sum = 0;
                        restoran.userReview.map((item) => {
                            sum += (item.ReviewQuality) / restoran.userReview.length;
                            console.log(name)
                        })

                        return (Math.round(sum * 10) / 10);
            }
        }
    };

    useEffect(() => {
        dispatch(fetchOneCardsRequest(id))
    }, [dispatch, id])

    const fileChangeHandler = e => {
        const file = e.target.files[0];
        setImg({image: file});
    };

    const inputChangeHandler = e => {
        let {name, value} = e.target;
        if (value !== undefined) {
            setReview(prevState => ({...prevState, [name]: value}));
        }
    };

    return (
        <Container style={{marginTop: 50, textAlign: 'center', marginBottom: 150}}>
            <h2>{restoran.title}</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 70}}>
                <div style={{marginRight: 50}}>{restoran.description}</div>
                <div>
                    <img src={'http://localhost:8000/' + restoran.image} alt="img"
                         style={{width: 500, height: 300, border: '1px solid grey'}}/>
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <h2>Галерея</h2>

                <div>
                    {restoran.userImage ? (
                        <ImageList sx={{width: 500, height: 300, margin: '0 auto'}} cols={3} rowHeight={164}>
                            {
                                restoran.userImage.map((item) => (
                                    <ImageListItem key={item._id}>
                                        <img
                                            src={'http://localhost:8000/' + item.image}
                                            srcSet={'http://localhost:8000/' + item.image}
                                            key={item._id}
                                            alt={'img'}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))
                            }
                        </ImageList>

                    ) : (<p style={{textAlign: 'center', fontSize: 12}}><b>Галерея пуста</b></p>)}
                </div>
            </div>
            <div>
                <h2>Рейтинг</h2>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <p>В общем: <Rating name="total" value={result() || 0} readOnly/></p>
                    <p>Еда: <Rating name="ReviewFood" value={resultOnce("ReviewFood") || 0} readOnly/></p>
                    <p>Сервис: <Rating name="ReviewQuality" value={resultOnce("ReviewQuality") || 0} readOnly/></p>
                    <p>Интерьер: <Rating name="ReviewInterior" value={resultOnce('ReviewInterior') || 0} readOnly/></p>
                </div>
            </div>
            <div>
                <h2>Отзывы</h2>
            </div>
            {user && user.role ? (
                <div>
                    <div>
                        <h2>Оставить Отзыв</h2>
                        <form style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                            <p>Еда: <Rating name="ReviewFood" value={review.ReviewFood} onClick={inputChangeHandler}
                                            required={true}/></p>
                            <p>Сервис: <Rating name="ReviewQuality" value={review.ReviewQuality}
                                               onClick={inputChangeHandler}
                                               required={true}/></p>
                            <p>Интерьер: <Rating name="ReviewInterior" value={review.ReviewInterior}
                                                 onClick={inputChangeHandler} required={true}/></p>
                            <TextField name="description" onChange={inputChangeHandler} type="text"
                                       placeholder="Описание"
                                       required={true} style={{marginBottom: '10px'}} multiline rows={8}/>
                            <Button variant="contained" type="submit" style={{width: 400}}
                                    disabled={review.description === ''}>Send</Button>
                        </form>
                    </div>
                    <div>
                        <h2>Добавить изображение</h2>
                        <form style={{display: 'flex', flexDirection: 'column', width: 400}}>
                            <TextField name="image" onChange={e => (fileChangeHandler(e))} type="file"
                                       placeholder="Изображение"
                                       required={true} style={{marginBottom: '10px'}}/>
                            <Button variant="contained" type="submit" style={{width: 400}}
                                    disabled={!img.image}>Send</Button>
                        </form>
                    </div>
                </div>
            ) : null
            }
        </Container>
    );
};

export default RestoInfo;