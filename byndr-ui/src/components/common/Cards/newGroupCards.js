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
        borderRadius: 15,
        border: "1px solid #E8E8E8",
    },
    card_title: {
        padding: 20,
        fontSize: 24,
        textAlign: "center",
        fontFamily: 'Poppins',
        color: "#041E5C",
        fontWeight: '500',
    },
    card_desc: {
        padding: 20,
        paddingTop:0,
        fontSize: 18,
        textAlign: "center",
        fontFamily: 'Poppins',
        color: "#000000",
        opacity:0.5,
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
                paddingLeft: "25%",
                paddingBottom:40
            }}>
                <Button
                    component={Link} to="/connect/messages/grpChat"
                    style={{
                        textAlign: "center",
                        fontFamily: 'Poppins',
                        borderRadius: 5,
                        background: '#F4F7FF 0% 0% no-repeat padding-box',
                        color: '#1956E3',
                        fontWeight: '500',
                        fontSize:18,
                        textTransform: "capitalize",
                        boxShadow:"none",
                        width:"70%"
                    }}
                    variant="contained"
                    color="primary">{props.cardButton}</Button>
            </CardActions>
        </Card >
    );
}