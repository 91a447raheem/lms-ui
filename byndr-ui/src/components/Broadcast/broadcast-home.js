import React from 'react';
import Header from '../common/header';
import Typography from '@material-ui/core/Typography';
import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
import Videolist from './videolist';
import { useHistory } from "react-router-dom";


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
    NumOfItems: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        marginLeft: "5vw",
        marginTop: '0.5vh',

    },
    selectShow: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "13vw",
        marginTop: '0.5vh'
    },

    selectSortby: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "39vw",
        [theme.breakpoints.down('md')]: {
            marginLeft: "23vw",
        },
    },

    Show: {
        marginLeft: "13vw",
        marginTop: '1vh',
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
        },
    },
    Sortby: {
        marginLeft: "38vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '10ch',
            marginLeft: "23vw",
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

let dataDummy = [
    { 1: "1" },
    { 1: "2" },
    { 1: "3" },
    { 1: "4" },
    { 1: "5" },
    { 1: "6" },
    { 1: "7" },
    { 1: "8" }
];



export default function () {

    const history = useHistory();
    const classes = useStyles();
    const liveVedio = "Live Right Now!";
    const featureBroadcast = "Feature Broadcast";
    const upcomingBroadcast = "Upcoming Broadcast";
    const featurePlaylist = "Feature Playlists";


    return (

        <div >
            <Header />
            <div className={classes.selectwrapper} >

                <div className={classes.NumOfItems}> 244 Items</div>

                <div className={classes.selectShow}>
                    Show
                    </div>

                <div style={{ display: "flex" }}>
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
            </div>

            <div style={{padding: '0 0 5% 0'}}>
                <div style={{ marginLeft: "6vw", marginTop: '1vh', width: '86%', backgroundColor: "gold", padding: "1em", borderRadius: '15px' }}>
                    <Typography variant="h5">
                        Hey Name,
                        </Typography>
                    <Typography variant="h5">
                        Let's Start a Broadcast!
                        </Typography>
                    <div style={{ display: "flex", flexFlow: "wrap", marginTop: '3vh' }}>
                        <div style={{ border: '1px solid black', borderRadius: '4px', padding: '0.25em', backgroundColor: 'white', cursor: 'pointer' }}
                            onClick={() => { console.log('hello'); history.push('/broadcast/startbroadcast') }}>
                            New Broadcast
                        </div>
                        <div style={{ border: '1px solid black', borderRadius: '4px', padding: '0.25em', marginLeft: '0.5vw', cursor: 'pointer' }}
                            onClick={() => { console.log('hello'); history.push('/broadcast/uploadvideo') }}>
                            Upload Video</div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: '2vh'}}>

                <div id="liveVideo">
                    <Videolist
                        data={dataDummy}
                        name={liveVedio}
                        size={5}
                    >
                    </Videolist>
                </div>

                <div id="featureBroadcast">
                    <Videolist
                        data={dataDummy}
                        name={featureBroadcast}
                        size={5}
                    >
                    </Videolist>
                </div>

                <div id="upcomingBroadcast">
                    <Videolist
                        data={dataDummy}
                        name={upcomingBroadcast}
                        size={5}
                    >
                    </Videolist>
                </div>

                <div id="featurePlaylist">
                    <Videolist
                        data={dataDummy}
                        name={featurePlaylist}
                        size={5}
                    >
                    </Videolist>
                </div>

            </div>

        </div>

    );
}