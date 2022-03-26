import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "@mui/material";
import {useSelector} from "react-redux";

const CardResto = (props) => {
    const user = useSelector(state => state.users.user);

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                action={
                    user && user.role === 'Admin' ? (
                        <IconButton aria-label="settings">
                            <DeleteIcon/>
                        </IconButton>
                    ) : null
                }
                title="Shrimp and Chorizo Paella"
            />
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Link to={`/Resto/${props.id}`} style={{cursor: 'pointer'}}>Название Ресторана</Link>
                <Typography variant="body2" color="text.secondary">
                    Звёзды рейтинга
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Отзывы и рейтинг
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Количество фото
                </Typography>
            </CardContent>
        </Card>
    )
};

export default CardResto;