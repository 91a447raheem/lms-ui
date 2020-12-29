import React, { useState } from 'react';
import Headerconnect from './headerconnect';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { Divider } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Datacard from './datacard';

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
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "2vw"
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
        marginLeft: "2vw",
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

export default function Sharedcontent() {


    const [likedCards, updatelikedCards] = React.useState([]);
    // console.log(likedCards);
    const classes = useStyles();


    return (
        <div style={{ backgroundColor: "white", height: "100%" }}>
            <Headerconnect />
            <div style={{ display: "flex", marginTop: "2vh" }}>
                <div className={classes.selectwrapper} >

                    <div className={classes.selectShow}>
                        Show
                ``  </div>

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

                <div className={classes.selectwrapper} >

                    <div className={classes.selectSortby}>
                        Sort
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


            <div style={{ display: "flex", flexFlow: "wrap", width: "80%", margin: "2vw 6vw" }}>

                {
                    dataDummy.map((data) =>
        
                        <Datacard
                            data={data}
                            updatelikedCards={updatelikedCards}
                            likedCards={likedCards}>
                        </Datacard>
                        /* <Dialog aria-labelledby="customized-dialog-title" open={open}>
                                
                            <DialogContent>
            
                                <Typography style={{ color: "gray", display: 'flex', justifyContent: 'center' }} >
                                    {`Check your email for changing password`}
                                </Typography>
                            </DialogContent>
            
            
                            <DialogActions>
                                <Button style={{ width: '45%' }} variant="contained" size="large" color="primary" onClick={handleSubmit}>
                                    Okay
                      </Button>
                            </DialogActions>
            
                        </Dialog> */
                    )}
            </div>

        </div>
    );
}

