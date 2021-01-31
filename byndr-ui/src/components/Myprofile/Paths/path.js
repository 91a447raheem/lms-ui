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
import { Link } from "react-router-dom";


import MyprofileDetails from '../../common/ProfileDetails/MyprofileDetails';
import NewCards from '../../common/Cards/newCards'
import UserCard from '../../common/Cards/userCards'
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

export default function Path() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3} className={classes.b_rt}>
                    <MyprofileDetails />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Button variant="contained"  className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/editProfile">
                        Spaces 0
                </Button>
                    <Button variant="contained" color="primary" className={`${classes.m_p_left_25}`}>Paths 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`}>Broadcasts 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`}>Collaborations 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/people">People 0</Button>

                    <Grid item xs={12} sm={12} className={classes.b_rt}>
                        <Grid item xs={12} sm={12} className={`${classes.m_left_25} ${classes.m_top_25}`}>
                            <Toolbar variant="dense">
                                <Typography className={`${classes.title} ${classes.countTotal}`}>244 Items</Typography>
                                <Typography className={`${classes.m_left_25} ${classes.sortBy}`}>Sort By</Typography>
                                <FormControl variant="outlined" className={classes.accountType}>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={10}
                                        className={classes.accountTypeWidth}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={10}>Most Viewed</MenuItem>

                                    </Select>
                                </FormControl>
                            </Toolbar>
                        </Grid>
                        <Grid item xs={12} sm={9} container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={2}
                            style={{ paddingTop: 20 }}>
                            <Grid item sm={4}>
                                <NewCards 
                                cardTitle="New Space. New Possibilities." 
                                cardInputPlaceHolder="Enter Space Name"
                                cardButton="+ Create New Space"
                                />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
