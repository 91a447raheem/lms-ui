import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Popover from '@material-ui/core/Popover';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import { useRouteMatch } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ReportIcon from '@material-ui/icons/Report';
import BlockIcon from '@material-ui/icons/Block';


import {
    faBookmark,
    faCertificate,
    faCog,
    faLayerGroup,
    faNewspaper,
    faPaperPlane,
    faUserCircle,
    faUsers,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    }
}));

export default function GrpHeadCard(props) {
    const classes = useStyles();
    let match = useRouteMatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    if (match.path === "/connect/messages/userChat") {
    return (
        <List dense className={classes.root}>
            <ListItem style={{ float: "left", width: "70%" }}>
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
                <ListItemSecondaryAction style={{ float: "right", position: "relative", marginTop: 17, width: "25%" }}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <PhoneOutlinedIcon color="inherit" fontSize="small" style={{ float: "left", fontSize: "1.6rem" }} />
                                <VideoCallOutlinedIcon color="inherit" fontSize="small" style={{ fontSize: "2rem", float: "left", marginTop: -3, marginRight: 10, marginBottom: 0, marginLeft: 10 }} />
                                <InfoIcon color="inherit" fontSize="small" style={{ fontSize: "1.6rem" }} />
                            </Typography>
                            <IconButton aria-label="settings" onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <CloseIcon color="inherit" fontSize="small" style={{ paddingTop: "10%" }} />
                            </Typography>

                        </Grid>
                    </Grid>
                    <Popover
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

                        <List component="nav"  >
                            <ListItem button>
                                <ListItemIcon>
                                    <ReportIcon />
                                </ListItemIcon>
                                <ListItemText primary="Report" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <BlockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Block" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <VolumeMuteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mute Group" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DeleteForeverIcon />
                                </ListItemIcon>
                                <ListItemText primary="Delete Chat" />
                            </ListItem>
                        </List>
                    </Popover>

                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
   }
    else {
    return (
        <List dense className={classes.root}>
            <ListItem style={{ float: "left", width: "70%" }}>
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
                <ListItemSecondaryAction style={{ float: "right", position: "relative", marginTop: 17, width: "25%" }}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <PhoneOutlinedIcon color="inherit" fontSize="small" style={{ float: "left", fontSize: "1.6rem" }} />
                                <VideoCallOutlinedIcon color="inherit" fontSize="small" style={{ fontSize: "2rem", float: "left", marginTop: -3, marginRight: 10, marginBottom: 0, marginLeft: 10 }} />
                                <InfoIcon color="inherit" fontSize="small" style={{ fontSize: "1.6rem" }} />
                            </Typography>
                            <IconButton aria-label="settings" onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <CloseIcon color="inherit" fontSize="small" style={{ paddingTop: "10%" }} />
                            </Typography>

                        </Grid>
                    </Grid>
                    <Popover
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

                        <List component="nav"  >
                            <ListItem button>
                                <ListItemIcon>
                                    <PinDropIcon />
                                </ListItemIcon>
                                <ListItemText primary="Pin to Top" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Rename" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Leave" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PersonAddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Participant" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PersonAddDisabledIcon />
                                </ListItemIcon>
                                <ListItemText primary="Remove Participant" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <VolumeMuteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mute Group" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PhotoCameraIcon />
                                </ListItemIcon>
                                <ListItemText primary="Change Image" />
                            </ListItem>
                        </List>
                    </Popover>

                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
   }
}