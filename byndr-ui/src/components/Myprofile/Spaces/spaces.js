import {
    Button,
    Grid,
    makeStyles,
} from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";


import MyprofileDetails from '../../common/ProfileDetails/MyprofileDetails';
import DataCard from '../../common/Cards/dataCard'
import DataDetailCard from '../../common/Cards/dataDetailCard'
import cardBGImg from "../../../img/cardbg.png";
import cardBGblue from "../../../img/cardBGblue.png";
import cardDetailBG from "../../../img/detailCardBG.png"

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

export default function Spaces() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3} className={classes.b_rt}>
                    <MyprofileDetails />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Button variant="contained" color="primary" className={`${classes.m_p_left_25}`}>
                        Spaces 75
                </Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/myPath">Paths 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`}>Broadcasts 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`}>Collaborations 0</Button>
                    <Button variant="contained" className={`${classes.m_p_left_25}`} component={Link} to="/myProfile/people">People 0</Button>

                    <Grid item xs={12} sm={12}
                        style={{ paddingTop: 20 }}
                        container
                        className={classes.b_rt}
                        direction="row"
                        justify="flex-start">

                        <Grid item xs={6} sm={6}
                            container
                            alignItems="center"
                            direction="row"
                            spacing={2}
                            style={{ paddingTop: 20 }}>
                            {[0, 1].map((value) => {
                                return (
                                    <Grid item sm={6} key={value} >
                                        <DataCard
                                            CardMediaImg={cardBGblue}
                                            CardVarient="BannerText"
                                            CardHeadText="SPA"
                                            cardContentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                                            cardPeople="Satish N"
                                            cardDur="6 min"
                                            cardView="2098"
                                        />
                                    </Grid>
                                );
                            })}
                            {[0, 1].map((value) => {
                                return (
                                    <Grid item sm={6} key={value} >
                                        <DataCard
                                            CardMediaImg={cardBGImg}
                                            CardVarient=""
                                            CardHeadText=""
                                            cardContentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                                            cardPeople="Rakesh A"
                                            cardDur="6 min"
                                            cardView="2098" />
                                    </Grid>
                                );
                            })}

                        </Grid>
                        <Grid item xs={6} sm={6} container
                            style={{ paddingTop: 20,paddingLeft: 20 }}>
                            <Grid item sm={12} xs={12}  >
                                <DataDetailCard
                                    CardMediaImg={cardDetailBG}
                                    CardVarient=""
                                    CardHeadText=""
                                    cardContentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                                    cardPeople="Rakesh A"
                                    cardDur="6 min"
                                    cardView="2,098 views" />
                            </Grid>

                        </Grid>



                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
