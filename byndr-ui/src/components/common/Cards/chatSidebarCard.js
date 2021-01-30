import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        borderBottom: "1px solid #E8E8E8",
        padding:0,
        '&:lastChild': {
            borderBottom: "none",
        }
    },
    cardTtitle: {
        textAlign: "left",
        font: "normal normal 600 20px/30px Poppins",
        color: "#000000",
        opacity: 1,
        fontSize:18,
        [theme.breakpoints.down('780')]: {
            fontSize:16
        }
    },
    cardSubText: {
        textAlign: "left",
        font: "normal normal normal 14px/30px Poppins",
        color: "#7B7C7E",
        opacity: 1,
        fontSize:12,
        [theme.breakpoints.down('780')]: {
            font: "normal normal normal 12px/16px Poppins",
        }
    },
    lastUpdate: {
        textAlign: "left",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7B7C7E",
        opacity: 1,
        paddingTop: 10
    },
    primaryButton:{
        background: "#F4F7FF 0% 0% no-repeat padding-box",
        borderRadius: 5,
    },
        lastChildCss:{
        '&:lastChild': {
            borderBottom: "none",
        }
    },
    deskTopView:{
        [theme.breakpoints.down('1030')]: {
            display:'none'
        }
    },
    mobileView:{
        [theme.breakpoints.up('1030')]: {
            display:'none'
        },
        [theme.breakpoints.down('1030')]: {
            display:'block',
            marginBottom:20,
            padding:10
        }
    }
}));

export default function ChatSidebarCard() {
    const classes = useStyles();
    return (
        <List dense className={classes.root}>
            <ListItem style={{padding:10}} className={classes.lastChildCss}> 
                <ListItemAvatar>
                    <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                    />
                </ListItemAvatar>
                <ListItemText>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start">
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    Vinay C
                                 </Typography>
                                <Typography variant="body2" className={classes.cardSubText} component="p">
                                    Custom Status
                                </Typography>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </ListItemText>
                <ListItemSecondaryAction className={classes.deskTopView}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Button  color="primary" className={classes.primaryButton}>
                                Admin
                            </Button>

                        </Grid>
                    </Grid>
                </ListItemSecondaryAction>
            </ListItem>
            <Grid item xs={12} className={classes.mobileView}>
                        <Grid container justify="center" spacing={2}>
                            <Button  color="primary" className={classes.primaryButton}>
                                Admin
                            </Button>
                        </Grid>
            </Grid>
        </List>
    );
}