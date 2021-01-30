import {
    Grid,
    makeStyles,
    Button
} from "@material-ui/core";

import React from "react";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import GrpHeadCard from '../../common/Cards/grpHeadCard'
import ChatMessageCard from '../../common/Cards/chatMessageCard'

import ChatLayout from './chatLayout'
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
    sidebar: {
        backgroundColor: "#fff",
        borderLeft: "1px solid #dfdfdf"
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
        [theme.breakpoints.down('1030')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('780')]: {
            fontSize: 16,
        },
    },
    cardShowAll: {
        textAlign: "center",
        font: "normal normal medium 16px / 30px Poppins",
        color: "#1956E3",
        opacity: 1
    },
    cardFile: {
        textAlign: "left",
        fontSize: 20,
        color: "#7F7F7F",
        [theme.breakpoints.down('1030')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('780')]: {
            fontSize: 16,
        },
    },
    cardViewAll: {
        textAlign: "center",
        textDecoration: "underline",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7F7F7F",
        opacity: 1,
        [theme.breakpoints.down('1030')]: {
            fontSize: 14,
            marginLeft:10
        }
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: "0px auto"
    },
    userTitle: {
        textAlign: "center",
        fontSize: "21px",
        color: "#000000",
        opacity: 1,
        [theme.breakpoints.down('1030')]: {
            fontSize: 18,
        }
    },
    userSubTitle: {
        textAlign: "center",
        font: "normal normal normal 15px/23px Poppins",
        color: "#7B7C7E",
        opacity: 1,
        paddingBottom: 20
    },
    viewProfileButton:{
        [theme.breakpoints.down('1030')]: {
            maxWidth: '100%',
            flexBasis:'100%',
            textAlign:'center',
            marginBottom:'20px'
        },
    }

}));

export default function UserChatInfo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    <GrpHeadCard title={'Vinay Chaganti'} headOptionstype={"single"} />
                    <Grid>
                        <ChatLayout />
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={4} className={classes.sidebar}>
                    <Grid item>
                        <Grid item>
                            <Avatar
                                className={`${classes.large}`}
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                                varient="square"
                            />
                        </Grid>

                        <Grid item>
                            <Typography variant="h5" className={classes.userTitle}>
                                Vinay Chaganti
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" className={classes.userSubTitle}>
                                Learner for Life
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{ marginBottom: 20 }}
                    >
                        <Grid item xs={5} className={classes.viewProfileButton}>
                            <Button variant="outlined" color="primary" style={{ textTransform: "capitalize", background: "#F4F7FF 0% 0% no-repeat padding-box", borderColor: "#F4F7FF" }}>
                                View Profile
                            </Button>
                        </Grid>
                        <Grid item xs={4} className={classes.viewProfileButton}>
                            <Button variant="outlined" color="primary" style={{ textTransform: "capitalize" }}>
                                Unfollow
                            </Button>

                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item xs={7}>
                            <Typography variant="body2" className={classes.cardFile} style={{ fontSize: 15, color: "#000000", }} component="p">
                                Connections
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={classes.cardSub} style={{ fontSize: 16, color: "#1956E3", }} component="p">
                                101
                        </Typography>

                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item xs={7}>
                            <Typography variant="body2" className={classes.cardFile} style={{ fontSize: 15, color: "#000000", }} component="p">
                                Published Spaces
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={classes.cardSub} style={{ fontSize: 16, color: "#1956E3", }} component="p">
                                246
                        </Typography>

                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{ paddingBottom: 20 }}
                    >
                        <Grid item xs={7}>
                            <Typography variant="body2" className={classes.cardFile} style={{ fontSize: 15, color: "#000000", }} component="p">
                                Published Paths
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2" className={classes.cardSub} style={{ fontSize: 16, color: "#1956E3", }} component="p">
                                75
                        </Typography>

                        </Grid>
                    </Grid>

                    <Divider />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{ padding: 20,textAlign:'center'}}
                    >
                        <Grid item lg= {5} md={12}>
                            <Typography variant="body2" className={classes.cardFile} component="p" style={{textAlign:'center'}}>
                                Files Shared
                        </Typography>
                        </Grid>
                        <Grid item lg= {3} md={6}>
                            <Typography variant="body2" className={classes.cardSub} component="p" style={{textAlign:'center'}}>
                                202
                        </Typography>

                        </Grid>
                        <Grid item lg= {4} md={6}>
                            <Typography variant="body2" className={classes.cardViewAll} component="p" style={{textAlign:'center'}}>
                                View All
                            </Typography>
                        </Grid>

                    </Grid>


                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 30, borderBottom: "1px solid #dfdfdf" }}
                    >
                        {[0, 1, 2].map((value) => {
                            return (

                                <Grid item xs={12} lg= {4} md={12} key={value}>
                                    <Avatar
                                        alt="Travis Howard"
                                        src="/static/images/avatar/2.jpg"
                                        sizes='large'
                                        variant="square"
                                        style={{ height: '90px', width: '90px', borderRadius: 10, marginBottom:15, textAlign:'center', marginLeft:'auto', marginRight:'auto'}}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        style={{ paddingLeft: 10, paddingTop: 20 }}
                    >
                        <Grid item lg={7} md={12}>
                            <Typography variant="body2" className={classes.cardFile} component="p" style={{textAlign:'center'}}>
                                Starred Messages
                        </Typography>
                        </Grid>
                        <Grid item lg= {1} md={6}>
                            <Typography variant="body2" className={classes.cardSub} component="p" style={{textAlign:'center'}}>
                                22
                        </Typography>

                        </Grid>
                        <Grid item lg= {4} md={6}>
                            <Typography variant="body2" className={classes.cardViewAll} component="p" style={{textAlign:'center'}}>
                                View All
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid style={{ padding: 10 }}>
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
