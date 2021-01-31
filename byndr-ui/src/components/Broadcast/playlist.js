import React from 'react';
import Select from "react-select";
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Header from '../common/header';
import { Button, Divider, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

//drawer
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAlbum from './playlistAlbum';

import TextField from '@material-ui/core/TextField';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({

    selectwrapper: {
        // position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(4.5),
            width: 'auto',
        },
    },
    selectShow: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "0vw",
        marginTop: '0.75vh',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0vw'
        },
    },

    selectSortby: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "0vw",
        marginTop: '0.75vh',

    },

    totalplaylist: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "50vw",
        marginTop: '0.75vh',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },

    Show: {
        marginLeft: "0vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
            marginLeft: '0vw'
        },
    },
    Sortby: {
        marginLeft: "1vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
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
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    drawerbody: {
        padding: theme.spacing(2, 2),

    },
    drawerForm: {
        margin: theme.spacing(2, 0),
    },
    textfield: {
        margin: theme.spacing(1, 0),

    },
    selectPrivacy: {
        marginLeft: "1vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '16ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
        },
    }
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

export default function Playlist() {


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
        <div style={{ height: "100vh" }}>
            <Header />
            {/* <CssBaseline /> */}

            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div style={{ display: "flex", marginTop: "2vh", justifyContent: "space-between" }}>

                    <div style={{ display: "flex" }}>

                        <div style={{ display: "flex" }} className={classes.selectwrapper}>


                            <div className={classes.selectShow}>
                                Show
                            </div>

                            <div className={classes.Show} >
                                <Select
                                    defaultValue={options[0]}
                                    options={options}
                                    styles={customStyles}
                                    autosize={true}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary: 'lightgrey',
                                            primary25: '#F8F8F8',

                                        },
                                    })}
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}

                                />
                            </div>
                        </div>



                        <div style={{ display: "flex" }} className={classes.selectwrapper}>

                            <div className={classes.selectSortby}>
                                Sort By
                            </div>

                            <div className={classes.Sortby}>
                                <Select
                                    defaultValue={options[0]}
                                    options={options}
                                    styles={customStyles}
                                    autosize={true}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary: 'lightgrey',
                                            primary25: '#F8F8F8',

                                        },
                                    })}
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}

                                />
                            </div>
                        </div>
                    </div>



                    <div className={clsx(classes.totalplaylist, {
                        [classes.hide]: open,
                    })} >
                        10 Playlists
                        </div>


                    <div className={classes.createplaylist} >
                        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}>
                            <span style={{ textOverflow: "ellipsis", whiteSpace: 'nowrap', overflow: 'hidden' }}> CREATE PLAYLIST</span>
                        </Button>
                    </div>

                </div>


                <div style={{ display: "flex", flexFlow: "wrap", marginLeft: '4vw' }} >

                    {
                        dataDummy.map((data) =>

                            <PlaylistAlbum
                                data={data}
                                updatelikedCards={updatelikedCards}
                                likedCards={likedCards}>
                            </PlaylistAlbum>
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
                    <div style={{ display: "flex" }}>
                        <ShopTwoOutlinedIcon fontSize="large" style={{ color: 'blue' }} />
                        <Typography style={{ marginLeft: '0.5vw', marginTop: '0.75vh', color: 'blue' }} component="p"> Create Playlist</Typography>
                    </div>
                </div>
                <Divider />
                <div className={classes.drawerbody}>
                    <Typography variant="h5" style={{ color: "lightgrey" }}>Create Playlist </Typography>

                    <form className={classes.drawerForm} noValidate autoComplete="off">

                        <TextField id="title" variant="outlined" placeholder="Playlist Name" fullWidth className={classes.textfield} />
                        {/* <TextField id="outlined-multiline-static" variant="outlined" placeholder="Description" fullWidth className={classes.textfield} multiline rows={6} /> */}

                    </form>

                    <div style={{ display: "flex" }}>
                        <Typography component="p" style={{ marginTop: '0.75vh' }}>Select who gets to see</Typography>
                        <div className={classes.selectPrivacy}>
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                styles={customStyles}
                                autosize={true}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary: 'lightgrey',
                                        primary25: '#F8F8F8',

                                    },
                                })}
                                components={{
                                    IndicatorSeparator: () => null
                                }}

                            />
                        </div>
                    </div>

                    <form className={classes.drawerForm} noValidate autoComplete="off">

                        <TextField id="outlined-multiline-static" variant="outlined" placeholder="Add Tags" fullWidth className={classes.textfield} multiline rows={3} />

                    </form>

                    <div style={{ padding: '2em', backgroundColor: "lightgrey" }}>
                        <Typography component='p' variant="h6" style={{ color: 'black', textAlign: "center" }}>Recommended Dimension</Typography>
                        <Typography component="p" variant="h5" style={{ color: 'black', textAlign: "center" }}>1920 X 1080</Typography>
                        <Typography component="p" style={{ color: 'black', textAlign: "center", marginTop: '3vh' }} >File size limit 2MB</Typography>
                    </div>

                </div>

                <div style={{ display: 'flex' }} className={classes.drawerbody}>
                    <div style={{ display: 'flex', border: '1px solid blue', borderRadius: '4px', padding: '0.15em', cursor: "pointer", width: '50%', margin: '0 0.3em', justifyContent: "center" }} >
                        <Typography component="p" style={{ color: 'blue' }}>Upload Image</Typography>
                    </div>
                    <div style={{ display: 'flex', border: '1px solid blue', borderRadius: '4px', padding: '0.15em', cursor: "pointer", width: '50%', margin: '0 0.3em', justifyContent: "center" }} >
                        <Typography component="p">Use Default</Typography>
                    </div>
                </div>

                <div style={{ display: 'flex', position: 'relative', marginTop: 'auto' }} className={classes.drawerbody}>
                    <div style={{ display: 'flex', border: '1px solid blue', borderRadius: '4px', padding: '0.15em', cursor: "pointer", width: '50%', margin: '0 0.3em', justifyContent: "center" }} >
                        <Typography component="p" style={{ color: 'blue' }}>+ Create</Typography>
                    </div>
                    <div style={{ display: 'flex', border: '1px solid blue', borderRadius: '4px', padding: '0.15em', cursor: "pointer", width: '50%', margin: '0 0.3em', justifyContent: "center" }} >
                        <Typography component="p">Cancel</Typography>
                    </div>
                </div>


            </Drawer>

        </div>
    );
}

