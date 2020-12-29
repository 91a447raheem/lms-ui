import {
    Avatar,
    Button,
    Grid,
    makeStyles,
    Typography,
    IconButton,
} from "@material-ui/core";





import React from "react";


import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import AllOutTwoToneIcon from "@material-ui/icons/AllOutTwoTone";
import AspectRatioTwoToneIcon from "@material-ui/icons/AspectRatioTwoTone";
import BrightnessAutoTwoToneIcon from "@material-ui/icons/BrightnessAutoTwoTone";
import Header from '../header'

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    accoutTypo:{
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
      m_top_25:{
        marginTop: 25,   
      },
}));

export default function MyprofileDetails() {
    const classes = useStyles();
    return (
        <Header></Header> &&
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={2}
        // style={{ paddingTop: 40 }}
    >
        <Grid item>
            <Avatar
                className={`${classes.large} ${classes.v_mar}`}
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                varient="square"
            />
        </Grid>
        <Grid item>
            <Typography variant="h5" className={classes.v_mar}>
                Satish Nampally
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h5" className={classes.accountTitle}>
                Journey to Perfection
            </Typography>
        </Grid>
        <Grid item className={classes.v_mar}>
            <Typography variant="h5">
                Founder at <span style={{ color: "#1956E3" }} > Byndr Inc</span>
            </Typography>
        </Grid>
        <Grid item className={classes.v_mar}
            sm={10}>
            <Typography variant="h3" className={classes.accoutTypo}>
                Lorem ipsum dolor amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor amet, consetetur
            </Typography>
            <Typography style={{ paddingTop: 10,textAlign: "center" }}>
                <LocationOnIcon color="primary" />Telangana, India
            </Typography>
        </Grid>
        <Grid className={classes.m_top_25}></Grid>
        <Grid className={classes.m_top_25}></Grid>
        <Grid className={classes.m_top_25}></Grid>
        <Grid item className={classes.v_mar} style={{ justifyContent: "space-between" }}>
            <Typography style={{ textAlign: "left", color: "#000000", opacity: 1 }}>
                Published Spaces
             
            <span style={{paddingLeft:100, textAlign: "right", color: "#1956E3", opacity: 1 }}>
                0
            </span>
             </Typography>

        </Grid>
        <Grid item className={classes.v_mar} style={{ justifyContent: "space-between" }}>
            <Typography style={{ textAlign: "left", color: "#000000", opacity: 1 }}>
            Published Paths
             
            <span style={{paddingLeft:100, textAlign: "right", color: "#1956E3", opacity: 1 }}>
                0
            </span>
             </Typography>

        </Grid>

        <Grid className={classes.m_top_25}></Grid>
        

        <Grid item xs={12} sm={8}>
            <IconButton>
                <AccountBalanceTwoToneIcon color="primary" />
            </IconButton>
            <IconButton>
                <AllOutTwoToneIcon />
            </IconButton>
            <IconButton>
                <AspectRatioTwoToneIcon />
            </IconButton>
            <IconButton>
                <AccountBalanceTwoToneIcon />
            </IconButton>
            <IconButton>
                <BrightnessAutoTwoToneIcon />
            </IconButton>
        </Grid>
        <Grid className={classes.m_top_25}></Grid>
        <Grid className={classes.m_top_25}></Grid>
        <Grid className={classes.m_top_25}></Grid>


        <Grid item xs={12} sm={8}>
    <Button variant="outlined" color="primary">
    Edit Profile
    </Button>
    </Grid>

    </Grid>
    );
}
