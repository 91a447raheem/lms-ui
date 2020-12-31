import {
    Button,
    Grid,
    makeStyles,
} from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";


import MyprofileDetails from '../../../common/ProfileDetails/MyprofileDetails';
import ListCard from '../../../common/Cards/listCard'
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
    }

}));

export default function FollowRequests() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3} className={classes.b_rt}>
                    <MyprofileDetails />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Button variant="contained" className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/spaces">
                        Spaces 75
                </Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/myPath">Paths 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`}>Broadcasts 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`}>Collaborations 0</Button>
                    <Button variant="contained" color="primary" className={`${classes.m_p_left_25}`}>People 0</Button>

                    <Grid item xs={12} sm={12} className={classes.b_rt}>
                        <Grid item xs={12} sm={12} className={`${classes.m_left_25} ${classes.m_top_25}`}>
                            <Button variant="contained" className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/people">Followers 766 </Button>
                            <Button variant="contained" className={`${classes.m_p_left_25}`}>Following 769</Button>
                            <Button variant="contained" className={`${classes.m_p_left_25}`} color="primary">Follow Requests</Button>
                        </Grid>
                        <Grid item xs={12} sm={9} container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={2}
                            style={{ paddingTop: 20 }}>
                            {[0,1,2,3,4,5,6,7,8,9,10,11].map((value) => {
                                return (
                                    <Grid item sm={6}  key={value} >
                                        <ListCard />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
