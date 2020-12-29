import {
    Button,
    FormControl,
    Grid,
    makeStyles,
    MenuItem,
    Select,
    Typography,
    Toolbar
} from "@material-ui/core";

import React from "react";

import ChatList from '../../Connect/Messages/chatList';
import NewGroupCards from '../../common/Cards/newGroupCards'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    b_rt: {
        borderRight: "1px solid lightgray",
    },
    title: {
        marginRight: theme.spacing(2),
    },
    countTotal: {
        textAlign: "left",
        font: "normal normal medium 18px / 23px Poppins",
        color: "#4A4A4A",
        opacity: 1
    },
    sortBy: {
        marginRight: 10,
        textAlign: "center",
        font: "normal normal normal 16px/30px Poppins",
        color: "#7B7B7B",
        opacity: 1
    },
    accountType: {
        flexGrow: 1,
    },
    accountTypeWidth: {
        width: 200,
    },
    m_p_left_25: {
        paddingLeft: 25,
        marginRight: 25
    },
    m_top_25: {
        marginTop: 25,
    },
    m_left_25: {
        marginLeft: 25
    },
    alignBlockCenter:{
        margin:'0 auto',
        marginTop:250
    }

}));

export default function Messages() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item
                    container
                    alignItems="center"
                    sm={4}
                    className={classes.alignBlockCenter}
                >
                    <NewGroupCards
                        cardTitle="Start Connecting With People"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                        cardButton="Send a Message"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
