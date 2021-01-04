import {
    Grid,
    makeStyles,
} from "@material-ui/core";

import React from "react";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import ChatList from './chatList';
import GrpHeadCard from '../../common/Cards/grpHeadCard'
import ChatRightInfoCard from '../../common/Cards/chatRightInfoCard'
import ChatSidebarCard from '../../common/Cards/chatSidebarCard'
import ChatMessageCard from '../../common/Cards/chatMessageCard'
import GrpChat from '../Messages/grpChat'

import ChatLayout from './chatLayout'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
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
    sidebar: {
        backgroundColor: "#fff"
    },
    cardTtitle: {
        textAlign: "center",
        font: "normal normal normal 20px/30px Poppins",
        color: "#7F7F7F",
    },
    cardSub: {
        textAlign: "center",
        font: "normal normal normal 20px/30px Poppins",
        color: "#1956E3",
    },
    cardShowAll: {
        textAlign: "center",
        font: "normal normal medium 16px / 30px Poppins",
        color: "#1956E3",
        opacity: 1
    },
    cardFile: {
        textAlign: "center",
        font: "normal normal normal 20px/30px Poppins",
        color: "#7F7F7F"
    },
    cardViewAll: {
        textAlign: "center",
        textDecoration: "underline",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7F7F7F",
        opacity: 1
    },
    chatContainer: {
        position: "relative"
    }

}));

export default function GrpChatInfo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9} style={{ padding: 0 }}>
                    {/* <GrpHeadCard />
                    <Grid style={{ marginTop: 90, }}>
                        <ChatLayout />
                    </Grid> */}
                    <GrpChat />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.sidebar}>
                    <ChatRightInfoCard title={'Group Info'} />
                    <Grid>
                        <Typography variant="body2" className={classes.cardTtitle} component="p">
                            Participants <span className={classes.cardSub}>24</span>
                        </Typography>
                    </Grid>
                    <Grid>
                        {[0, 1, 2, 3].map((value) => {
                            return (
                                <ChatSidebarCard key={value} />
                            );
                        })}
                    </Grid>
                    <Grid>
                        <Typography variant="body2" className={classes.cardShowAll} component="p">
                            + Show All Members
                        </Typography>
                    </Grid>
                    <Divider />
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        spacing={2}
                    // style={{ paddingTop: 40 }}
                    >
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.cardFile} component="p">
                                Files Shared
                        </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.cardSub} component="p">
                                202
                        </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.cardViewAll} component="p">
                                View All
                            </Typography>
                        </Grid>

                    </Grid>


                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        spacing={2}
                    // style={{ paddingTop: 40 }}
                    >
                        {[0, 1, 2].map((value) => {
                            return (

                                <Grid item xs={4} key={value}>
                                    <Avatar
                                        alt="Travis Howard"
                                        src="/static/images/avatar/2.jpg"
                                        sizes='large'
                                        variant="square"
                                        style={{ height: '100px', width: '100px' }}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        spacing={2}
                    // style={{ paddingTop: 40 }}
                    >
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.cardFile} component="p">
                                Starred Messages
                        </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body2" className={classes.cardSub} component="p">
                                22
                        </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.cardViewAll} component="p">
                                View All
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid>
                        {[0, 1].map((value) => {
                            return (
                                <ChatMessageCard key={value} />
                            );
                        })}
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}
