import React from 'react';
import Headerconnect from './headerconnect';
import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
import SharedFilesChatLayout from './Messages/sharedFilesChatLayout'
import {
    Grid,
} from "@material-ui/core";

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
        [theme.breakpoints.down('md')]: {
            width: 'auto !important',
            marginBottom:10
        }
    },
    selectShow: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7B7B7B',
    },

    selectSortby: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7B7B7B',
        [theme.breakpoints.down('md')]: {
            marginLeft: "0",
        },
    },

    Show: {
        marginLeft: "2vw",
        float: "left",
        marginRight: 10,
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
        marginLeft: "0",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '10ch'
        },
    },
    Participants: {
        // marginLeft: "0.1vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        width: "200px",
        float: "left",
        transition: theme.transitions.create('width'),
        [theme.breakpoints.down('md')]: {
            width: '100px',
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
    { value: 'allParticipants', label: 'All Participants' }
];

const sortOptions = [
    { value: 'newestFirst', label: 'Newest First' },
    { value: 'oldFirst', label: 'Old First' }
];


export default function Sharedcontentsingle() {

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: "#F7F7F7", height: "auto", marginTop: "-12px" }}>
            <Headerconnect />
            <div style={{ display: "block", width: "100%", float: "left", background: "#fff", padding: "10px 0px", borderTop: "1px solid #dfdfdf" }}>
                <div className={classes.selectwrapper} style={{ width: "65%", float: "left" }}>
                    <div style={{ display: "block" }}>
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
                </div>

                <div className={classes.selectwrapper} style={{ width: "30%", float: "left" }}>

                    <div className={classes.selectSortby}>
                        Sort
                    </div>

                    <div className={classes.Sortby}>
                        <Select
                            defaultValue={sortOptions[0]}
                            options={sortOptions}
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


            <div style={{ width: "100%", float: "left" }}>

                <Grid style={{ marginTop: 72, }} className={classes.gridChat}>
                    <SharedFilesChatLayout />
                </Grid>
            </div>

        </div>
    );
}

