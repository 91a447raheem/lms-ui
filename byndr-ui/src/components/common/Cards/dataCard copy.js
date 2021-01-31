import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Grid, Button } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';


import Header from "../../../img/cardbg.png";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardGrid: {
        position: "relative"
    },
    CardHeadText: {
        position: "absolute",
        top: "20%",
        width: "50%",
        textAlign: "left",
        font: "normal normal  73px/98px Poppins",
        color: "#5C90E3",
        opacity: 1
    },
    CardHeadImage: {
        position: "absolute",
        right: "5%",
        top: "20%",
        opacity: 1
    },
    cardHead: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundColor: "#DEEEFF",
        border: "1px solid #FFFFFF33",
        borderRadius: 5,
        opacity: 1
    },


    avatar: {
        backgroundColor: red[500],
    },
    gridroot: {
        flexGrow: 1,
    },
    cardContentText: {
        textAlign: "left",
        font: "normal normal normal 18px/24px Poppins",
        color: "#000000",
        opacity: 1
    },
    cardPeople: {
        textAlign: "center",
        font: "normal normal 600 18px/ 35px Poppins",
        color: "#1956E3",
        opacity: 1
    },

    cardCount: {
        textAlign: "center",
        font: "normal normal normal 16px/35px Poppins",
        color: "#7F7F7F",
        opacity: 1
    },
    cardIcon: {
        marginRight: 10,
        marginTop: 5
    },
    pad_L35: {
        paddingLeft: 35
    },
    pad_L25: {
        paddingLeft: 25
    },
    pad_L50: {
        paddingLeft: 50
    },
    colo: {
        color: "#7F7F7F",
    }
}));

export default function DataCard() {
    const classes = useStyles();



    return (
        <Card className={classes.root}>
            <Grid className={classes.cardGrid}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={Header}
                    title="Contemplative Reptile"
                />
                <Typography
                    gutterBottom
                    className={classes.CardHeadText}
                >
                    Spa
                </Typography>
                <Grid item className={classes.CardHeadImage}>
                    <Avatar
                        className={`${classes.large} ${classes.v_mar}`}
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                        varient="square"
                    />
                </Grid>
            </Grid>




            <CardContent>
                <Typography variant="body2" className={classes.cardContentText} component="p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </Typography>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant="body2" className={classes.cardPeople} component="p">
                                Satish N
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" className={classes.cardCount} component="p">
                                6 min
                            </Typography>
                        </Grid>
                        <Grid item className={classes.pad_L35}>

                            <Typography variant="body2" className={classes.cardCount} component="p">
                                <RemoveRedEyeOutlinedIcon fontSize="small" className={classes.cardIcon} />
                                2,098
                            </Typography>
                        </Grid>
                        <Grid item className={classes.colo} justifySelf="end">
                            <FontAwesomeIcon icon={faPaperPlane} size={"sm"} />
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardActions spacing={6} className={classes.colo}>
                <Grid item xs={6} sm={6} >
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    <ChatBubbleOutlineOutlinedIcon fontSize="small" className={classes.pad_L25}/> 23
                </Grid>
                <Grid item xs={6} sm={6} className={`${classes.pad_L50}`}>
                    <ShareOutlinedIcon fontSize="small" />
                    <StarBorderOutlinedIcon fontSize="small"  className={classes.pad_L25}/>50
                </Grid>

            </CardActions>
        </Card>
    );
}