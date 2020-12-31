import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BlockIcon from '@material-ui/icons/Block';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Popover from '@material-ui/core/Popover';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    gridroot: {
        flexGrow: 1,
    },
    peopleName: {
        textAlign: "center",
        font: "normal normal normal 22px/30px Poppins",
        color: "#000000",
        opacity: 1
    },
    peopleStatus: {
        textAlign: "center",
        font: "normal normal normal  16px/30px Poppins",
        color: "#7D7D7D",
        opacity: 1
    },
    peopleConnection: {
        textAlign: "center",
        font: "normal normal normal  16px/30px Poppins",
        color: "#1956E2",
        opacity: 1
    },
    cardCount: {
        textAlign: "center",
        font: "normal normal normal 22px/50px Poppins",
        color: "#000000",
        opacity: 1
    },
    cardCountText: {
        textAlign: "left",
        font: "normal normal normal 14px / 13px Poppins",
        color: "#848484",
        opacity: 1
    },
}));

export default function UserCard() {
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
        <Card className={classes.root}>

            <CardHeader
                avatar={
                    <Avatar
                        className={`${classes.large} ${classes.v_mar}`}
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                        style={{
                            padding: "20px",
                            marginLeft: "90px"
                        }}
                    />

                }
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon  />
                    </IconButton>
                }
            />
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
                    <ListItem button>
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

            <CardContent>
                <Typography variant="body2" className={classes.peopleName} component="p">
                    Rathish Rajendran
                </Typography>
                <Typography variant="body2" className={classes.peopleStatus} component="p">
                    Custom Status
                </Typography>
                <Typography variant="body2" className={classes.peopleConnection} component="p">
                    8 Mutual Connections
                </Typography>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography variant="body2" className={classes.cardCount} component="p">
                                36
                            </Typography>
                            <Typography variant="body2" className={classes.cardCountText} component="p">
                                Published
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" className={classes.cardCount} component="p">
                                22
                            </Typography>
                            <Typography variant="body2" className={classes.cardCountText} component="p">
                                Broadcasts
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" className={classes.cardCount} component="p">
                                20k
                            </Typography>
                            <Typography variant="body2" className={classes.cardCountText} component="p">
                                Broadcasts
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions spacing={6}>
                <Button variant="outlined" color="primary" style={{margin: 25}}>Message </Button>
                <Button variant="outlined" color="primary">Video Call </Button>
            </CardActions>
        </Card>
    );
}