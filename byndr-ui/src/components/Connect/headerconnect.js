import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { useRouteMatch } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));



export default function Headerconnect() {

    const classes = useStyles();
    let match = useRouteMatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const viewTitles = (

        (() => {
            if (match.path === "/connect/allparticipants") {
                return (
                    <React.Fragment>

                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Group Participants
                        </Typography>

                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Button variant="contained" color="primary">
                                + Add Participants
                            </Button>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="default"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                        {renderMenu}

                    </React.Fragment>

                )
            }
            // else if (otherCase) {
            //   return (
            //     <div>otherCase</div>
            //   )
            // }
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
                <Toolbar style={{ backgroundColor: 'white', color: 'black' }}>
                    {
                        viewTitles
                    }
                </Toolbar>
            </AppBar>

        </div>
    );
}





