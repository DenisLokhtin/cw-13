import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link, Rating} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {deleteCardsRequest} from "../../store/actions/restoAction";

const CardResto = (props) => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    const result = () => {
        if (props.reviews) {
            let sum = 0;
            props.reviews.map((item) => {
                sum += ((item.ReviewFood + item.ReviewQuality + item.ReviewInterior) / 3) / props.reviews.length;
            })
            return (Math.round(sum * 10) / 10);
        }
    };

    return (
        <Card sx={{maxWidth: 345, border: '1px solid grey', marginBottom: 7}}>
            <CardHeader
                action={
                    user && user.role === 'admin' ? (
                        <IconButton aria-label="settings" onClick={() => dispatch(deleteCardsRequest(props.id))}>
                            <DeleteIcon/>
                        </IconButton>
                    ) : null
                }
                title={props.name}
            />
            <CardMedia
                component="img"
                height="194"
                image={'http://localhost:8000/' + props.image}
                alt="img"
                style={{width: 345}}
            />
            <CardContent>
                <Link href={`/Resto/${props.id}`} style={{cursor: 'pointer'}}>{props.title}</Link>
                <Typography style={{marginLeft: '-5px'}} variant="body2" color="text.secondary">
                    <Rating name="read-only" value={result()} readOnly/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ({props.reviews ? result() : 0}, {props.reviews ? props.reviews.length : 0} отзывов)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.userImage ? props.userImage.length : 0} фотографий
                </Typography>
            </CardContent>
        </Card>
    )
};

export default CardResto;