import React from 'react';
import Headerconnect from './headerconnect';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import FolderIcon from '@material-ui/icons/Folder';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileArchive,
} from "@fortawesome/free-solid-svg-icons";

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
    flieFloder: {
        height: "100px",
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center",
        width: "150px",
        fontSize: "29px",
    },
    cardBox:{
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        [theme.breakpoints.down('sm')]: {
            margin: '1rem 2rem !important'
        }
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

const showOptions = [
    { value: 'fileType', label: 'File Type' }
];

const options = [
    { value: 'allParticipants', label: 'All Participants' }
];

const sortOptions = [
    { value: 'newestFirst', label: 'Newest First' },
    { value: 'oldFirst', label: 'Old First' }
];

const dataDummy = [
    { 1: "1", role: "Admin" },
    { 1: "2", role: "member" },
    { 1: "3", role: "member" },
    { 1: "4", role: "member" },
    { 1: "5", role: "member" },
    { 1: "6", role: "member" },
    { 1: "7", role: "member" },
    { 1: "8", role: "member" }
]

export default function Sharedfiles() {


    const classes = useStyles();

    return (
        <div style={{ backgroundColor: "white", height: "100%", marginTop: "-12px" }}>
            <Headerconnect />
            <div style={{ display: "block", width: "100%", float: "left", background: "#fff", padding: "10px 0px", borderTop: "1px solid #dfdfdf" }}>
                <div className={classes.selectwrapper} style={{ width: "65%", float: "left" }}>
                    <div style={{ display: "block" }}>
                        <div className={classes.selectShow}>
                            Show
                      </div>
                        <div className={classes.Show} >
                            <Select
                                defaultValue={showOptions[0]}
                                options={showOptions}
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
                        <div className={classes.Participants}>
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

            <div style={{ display: "block", flexFlow: "wrap", width: "100%", float: "left" }}>

                {
                    dataDummy.map((data => {
                        if (data.role === "member") {
                            return (

                                <Card className={classes.cardBox} style={{ margin: " 20px", width: "150px", float: "left", borderRadius: "15px", border: "1px solid #E8E8E8" }}>
                                    <CardActionArea>
                                        <div className={classes.flieFloder}><FontAwesomeIcon icon={faFileArchive} size={"lg"} /></div>
                                        <CardContent style={{ display: 'flex', padding: "0.5vw 0.75vw 0.75vw 0.75vw", borderTop: "1px solid #E8E8E8" }}>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{
                                                padding: 2, whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            }}>
                                                <FolderIcon color="inherit" fontSize="small" style={{ float: "left", fontSize: "1.2rem", marginRight: 5 }} /> {data.role}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>


                            );
                        } else {
                            return null
                        }
                    }))
                }
            </div>

        </div>
    );
}

