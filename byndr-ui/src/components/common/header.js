import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'blue',
        marginLeft: `calc(1.5em + ${theme.spacing(4)}px)`
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {

    let match = useRouteMatch();


    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            {/* <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem> */}
        </Menu>
    );

    const viewTitles = (

        (() => {
            if (match.path === "/homescreen") {
                return (
                    <div style={{ display: "flex" }}>
                        <Typography className={classes.title} variant="body1" noWrap>Messages</Typography>
                        <Typography className={classes.title} variant="body1" noWrap>Find People</Typography>
                        <Typography className={classes.title} variant="body1" noWrap>Learning Groups</Typography>

                    </div>
                )
            }
            else if (match.path === "/connect/messages") {
                return (
                    <div style={{ display: "flex" }}>
                        <Typography className={classes.title} variant="body1" noWrap>Messages</Typography>
                        <Typography className={classes.title} variant="body1" noWrap>Find People</Typography>
                        <Typography className={classes.title} variant="body1" noWrap>Learning Groups</Typography>

                    </div>
                )
            }
            else if (match.path === "/connect/messages/grpChat" || match.path === "/connect/messages/grpChatInfo"
                || match.path === "/connect/messages/grpChatVoice" || match.path === "/connect/messages/grpChatVideo" || match.path === "/connect/messages/userChat" ) {
                return (
                    <div style={{ display: "flex" }}>
                        <Typography className={classes.title} variant="body1" noWrap>Messages</Typography>
                        <Typography className={classes.title} variant="body1" noWrap>Find People</Typography>
                        <Typography className={classes.title} variant="body1" noWrap>Learning Groups</Typography>

                    </div>
                )
            }
            else {
                return (
                    <div>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Home
                            </Typography>
                    </div>
                )
            }
        })()

    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'white', color: 'grey' }}>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}

                    {
                        viewTitles

                    }




                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search for anything"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button style={{ textTransform: 'none', color: 'lightgrey' }} >+ Invite People</Button>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon style={{ color: 'lightgrey' }}
                                    onMouseOver={(e) => e.target.style.color = 'blue'}
                                    onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                />
                            </Badge>
                        </IconButton>

                        <IconButton aria-label="show 17 new notifications" color="inherit" >
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon
                                    style={{ color: 'lightgrey' }}
                                    onMouseOver={(e) => e.target.style.color = 'blue'}
                                    onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                />
                            </Badge>
                        </IconButton>
                        {/* <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton> */}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* {renderMenu} */}
        </div>
    );
}