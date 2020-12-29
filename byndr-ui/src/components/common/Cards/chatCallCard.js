import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #E8E8E8",
        borderRadius: 10,
    },
    cardTtitle: {
        textAlign: "left",
        font: "normal normal 600 20px/30px Poppins",
        color: "#000000",
        opacity: 1,
    },
    cardSubText: {
        textAlign: "left",
        font: "normal normal normal 14px/30px Poppins",
        color: "#7D7D7D",
        opacity: 1
    },
    cardSub: {
        textAlign: "left",
        font: "normal normal normal 20px/30px Poppins",
        color: "#1956E3",
    },
}));

export default function ChatCallCard(props) {
    const classes = useStyles();
    return (
        <List dense className={classes.root}>
            <ListItem>
                <ListItemText>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    {props.title}
                                </Typography>
                                <Typography variant="body2" className={classes.cardSub} component="p">
                                    {props.userName}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </ListItemText>
                <ListItemSecondaryAction>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    {props.callTime}
                                </Typography>
                                <Typography variant="body2" className={classes.cardSubText} component="p">
                                    {props.particepent}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}