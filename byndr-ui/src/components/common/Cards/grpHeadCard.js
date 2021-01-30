import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import {
    MoreInfoPopup,
    CancelPopup,
    GroupMoreInfoPopup
} from "../popups";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        borderBottom: "1px solid #E8E8E8",
        marginTop: -8,
        zIndex: 1,
        paddingTop: 13,
        float: "left"
    },
    cardTtitle: {
        textAlign: "left",
        font: "normal normal 600 20px/30px Poppins",
        color: "#000000",
        opacity: 1,
        [theme.breakpoints.down('1030')]: {
            fontSize:"15px"
        }
    },
    cardSubText: {
        textAlign: "left",
        font: "normal normal normal 14px/30px Poppins",
        color: "#7D7D7D",
        opacity: 1
    },
    lastUpdate: {
        textAlign: "left",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7B7C7E",
        opacity: 1,
        paddingTop: 10
    },
    cardTitleBlock:{
        width: "70%",
        [theme.breakpoints.down('1030')]: {
            width: '48%',
            paddingRight:"12px"
        },
    },
    cardRightBlock:{
        width: "185px"
    }
}));

export default function GrpHeadCard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentPop, setCurrentPop] = React.useState(null)

    const handleClick = (event, currentOpenPop) => {
        setAnchorEl(event.currentTarget);
        setCurrentPop(currentOpenPop)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const popupBlock = <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        {currentPop == 'more' ? props.headOptionstype && props.headOptionstype == "single" ? <MoreInfoPopup /> : <GroupMoreInfoPopup /> : <CancelPopup />}
    </Popover>

    return (
        <List dense className={classes.root}>
            <ListItem className={classes.cardTitleBlock} style={{ float: "left"}}>
                <ListItemAvatar>
                    <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                    />
                </ListItemAvatar>
                <ListItemText>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    {props.title}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </ListItemText>
                <ListItemSecondaryAction className={classes.cardRightBlock} style={{ float: "right", position: "relative", marginTop: 17,  }}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <PhoneOutlinedIcon color="inherit" fontSize="small" style={{ float: "left", fontSize: "1.6rem" }} />
                                <VideoCallOutlinedIcon color="inherit" fontSize="small" style={{ fontSize: "2rem", float: "left", marginTop: -3, marginRight: 10, marginBottom: 0, marginLeft: 10 }} />
                                <InfoIcon color="inherit" fontSize="small" style={{ fontSize: "1.6rem" }} />
                            </Typography>
                            <IconButton aria-label="settings" onClick={(e) => handleClick(e, 'more')}>
                                <MoreVertIcon />
                            </IconButton>
                            <IconButton aria-label="settings" onClick={(e) => handleClick(e, 'cancel')}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    {anchorEl ? popupBlock : null}
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}