import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import Header from '../common/header';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

//drawer
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

import { useParams } from "react-router-dom";
import Datacard from './dataCard';
import SideBar from '../common/sidebar';

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({

    selectwrapper: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1.5),
            width: 'auto',
        },
    },
    selectShow: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "2vw",
        [theme.breakpoints.down('md')]: {
            marginLeft: '1vw'
        },
    },

    selectSortby: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',s
        // alignItems: 'center',
        // justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "14vw",
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },

    totalplaylist: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "48vw",
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },

    Show: {
        marginLeft: "2vw",
        color: 'blue',
        // padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
            marginLeft: '1vw'
        },
    },
    Sortby: {
        marginLeft: "2vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '10ch',
            marginLeft: "1vw",
        },
    },
    createplaylist: {
        marginLeft: "0vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '20ch',
            marginLeft: "0vw",
        },
    },
    Participants: {
        // marginLeft: "0.1vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
        },
    },
    root: {
        maxWidth: 235,
        margin: '1vw 1vw ',
        WebkitFlexFlow: 'column',
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(10),
            width: 235,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: 0,
    },
    contentShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    hide: {
        display: 'none',
    },
}));

const customStyles = {
    option: (base, state) => ({
        ...base,
        color: state.isSelected ? 'black' : 'black',
        ':active': {
            color: state.isSelected ? 'black' : 'black'
        }
    }),
    control: (base, state) => ({
        ...base,
        background: "#F8F8F8",
        // match with the menu
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "blue" : "#F8F8F8",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        // width 
        width: "auto !important",

        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "blue"
        }
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
    }),

};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const dataDummy = [
    { 1: "1", role: "member" },
    { 1: "2", role: "member" },
    { 1: "3", role: "member" },
    { 1: "4", role: "member" },
    { 1: "5", role: "member" },
    { 1: "6", role: "member" },
    { 1: "7", role: "member" },
    { 1: "8", role: "member" }
]

const PlaylistByID = (props) => {


    // console.log(match);
    let params = useParams();
    // console.log(params.id);
    const [likedCards, updatelikedCards] = React.useState([]);
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div style={{ backgroundColor: "white", height: "100%" }}>
            <div style={{ marginLeft: '3vw' }}>

                <Header />

            </div>

            <SideBar />
            {/* <CssBaseline /> */}

            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div style={{ display: "flex", marginTop: "2vh", justifyContent: "space-between" }}>
                    <div className={classes.selectwrapper} style={{ display: 'flex' }}>

                        <div className={classes.selectShow}>
                            {params.id}
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className={classes.Show} >
                                Created By
                            </div>

                            <div className={clsx(classes.selectSortby, { [classes.hide]: open, })}>
                                last
                                </div>
                        </div>
                    </div>

                    <div className={classes.selectwrapper} style={{ display: 'flex' }}>

                        <div className={clsx(classes.totalplaylist, {
                            [classes.hide]: open,
                        })} >
                            10 Playlists
                        </div>


                        <div className={classes.createplaylist}>
                            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleDrawerOpen}
                                className={clsx(open && classes.hide)}>CREATE PLAYLIST</Button>
                        </div>
                    </div>

                </div>


                <div style={{ display: "flex", flexFlow: "wrap", marginLeft: '4vw' }} >

                    {
                        dataDummy.map((data) =>

                            <Datacard
                                data={data}
                                updatelikedCards={updatelikedCards}
                                likedCards={likedCards}
                                videoid={params.id}
                            >
                            </Datacard>
                        )}
                </div>
            </main>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
            </Drawer>

        </div>
    );
}

export default PlaylistByID; 