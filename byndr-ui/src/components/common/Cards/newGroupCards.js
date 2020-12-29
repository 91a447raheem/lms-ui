import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {
    Button
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRradius: 15,
    },
    card_title: {
        padding: 20,
        fontSize: 20,
        textAlign: "center",
        font: "normal normal medium 20px/27px Poppins",
        color: "#1956E3"
    },
    card_desc: {
        padding: 20,
        fontSize: 20,
        textAlign: "center",
        font: "normal normal medium 20px/27px Poppins",
        color: "#7B7C7E",
        letterSpacing: 0.24
    },

}));

export default function NewGroupCards(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} container
            alignItems="center">
            <CardContent>
                <Typography variant="body2" className={classes.card_title} component="p">
                    {props.cardTitle}
                </Typography>
                <Typography variant="body2" className={classes.card_desc} component="p">
                    {props.cardDescription}
                </Typography>
            </CardContent>
            <CardActions style={{
                paddingLeft: "35%"
            }}>
                <Button
                    component={Link} to="/connect/messages/grpChat"
                    style={{
                        textAlign: "center",
                        font: "normal normal medium 16px/30px Poppins",
                        borderRadius: 5,
                    }}
                    variant="contained"
                    color="primary">{props.cardButton}</Button>
            </CardActions>
        </Card >
    );
}