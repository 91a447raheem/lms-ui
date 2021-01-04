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

import ChatList from './chatList';
import GrpHeadCard from '../../common/Cards/grpHeadCard'
import ChatLayout from './chatLayout'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#F7F7F7",
        position: "relative",
        height: '100%'
    },

    b_rt: {
        borderRight: "1px solid lightgray",
    },
    title: {
        marginRight: theme.spacing(2),
    },
    countTotal: {
        textAlign: "left",
        fontFamily: 'Poppins',
        fontSize: 18,
        color: "#4A4A4A",
        opacity: 1
    },
    sortBy: {
        marginRight: 10,
        textAlign: "center",
        fontFamily: 'Poppins',
        fontSize: 16,
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
    titleBlock: {
        width: 'calc(100% - 10px)',
        padding: '0 5px',
        position: 'absolute',
        background: '#fff',
        zIndex: 1
    },
    gridChat: {
        height: 'calc(100% - 72px)'
    }

}));

export default function GrpChat() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} style={{ marginLeft: -17, paddingLeft: 17 }}>
                <Grid item xs={12} style={{ padding: 0 }}>
                    <div className={classes.titleBlock}><GrpHeadCard /></div>
                    <Grid style={{ marginTop: 72, }} className={classes.gridChat}>
                        <ChatLayout />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
