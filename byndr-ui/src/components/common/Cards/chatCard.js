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
import BlockIcon from '@material-ui/icons/Block';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';



const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #E8E8E8",
        borderRadius: 10
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

export default function ChatCard() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <List dense className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                        />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    Vinay C
                                 </Typography>
                                <Typography variant="body2" className={classes.cardSubText} component="p">
                                    Custom Status
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </ListItemText>
                <ListItemSecondaryAction>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                Yesterday
                                <br />
                                <Icon className="fa fa-plus-circle" color="primary" />
                                <Chip label="2m" color="primary" size="small" />
                            </Typography>
                            <IconButton aria-label="settings" onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
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
                                    <ShareOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Share Profile" />
                            </ListItem>
                            <ListItem button component={Link} to="/connect/messages/userChat">
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Profile" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PersonAddDisabledOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Disconnect" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ReportOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Report" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <BlockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Block" />
                            </ListItem>
                        </List>
                    </Popover>

                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}