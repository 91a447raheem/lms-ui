import {
    Avatar,
    Button,
    Grid,
    makeStyles,
    Typography,
    IconButton,
} from "@material-ui/core";





import React from "react";

import ChatCard from '../../common/Cards/chatCard'


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    accoutTypo: {
        textAlign: "center",
        font: "normal normal normal 16px/22px Poppins",
        letterSpacing: 0.24,
        color: "#000000",
        opacity: 0.7
    },
    accountTitle: {
        textAlign: "left",
        font: "normal 21px",
        letterSpacing: "0px",
        color: "#000000",
        opacity: 0.5
    },
    m_p_left_25: {
        paddingLeft: 25,
        marginRight: 25
    },
    m_top_25: {
        marginTop: 25,
    },
    centerAlign:{
        textAlign:"center"
    }
}));

export default function ChatList() {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            spacing={2}
            // style={{ paddingTop: 40 }}
        >
            <Grid item className={classes.centerAlign}>
                <Button variant="outlined" color="primary">
                    Create Chat Group
                </Button>
            </Grid>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                return (
                    <Grid item sm={12} key={value}>
                        <ChatCard />
                    </Grid>
                );
            })}
        </Grid>
    );
}
