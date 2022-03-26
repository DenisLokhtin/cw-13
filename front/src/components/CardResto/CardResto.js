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

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                action={
                    user && user.role === 'admin' ? (
                        <IconButton aria-label="settings" onClick={() => dispatch(deleteCardsRequest())}>
                            <DeleteIcon/>
                        </IconButton>
                    ) : null
                }
                title="Shrimp and Chorizo Paella"
            />
            <CardMedia
                component="img"
                height="194"
                image={'http://localhost:8000/' + props.image}
                alt="Paella dish"
            />
            <CardContent>
                <Link href={`/Resto/${props.id}`} style={{cursor: 'pointer'}}>{props.title}</Link>
                <Typography style={{marginLeft: '-5px'}} variant="body2" color="text.secondary">
                    <Rating name="read-only" value={5} readOnly/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    (3.8, 150 отзывов)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    150 фотографий
                </Typography>
            </CardContent>
        </Card>
    )
};

export default CardResto;