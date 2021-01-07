import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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

let dataDummy = [
    { 1: "1", role: "Admin" },
    { 1: "2", role: "member" },
    { 1: "3", role: "member" },
    { 1: "4", role: "member" },
    { 1: "5", role: "member" },
    { 1: "6", role: "member" },
    { 1: "7", role: "member" },
    { 1: "8", role: "member" }
];

let dataArraylength = dataDummy.length;
// console.log(dataArraylength);


let newArr = [];
while (dataDummy.length) newArr.push(dataDummy.splice(0, 2));
// console.log(newArr);


export default function Videoconfrence() {


    const classes = useStyles();

    return (
        <div style={{ backgroundColor: 'grey', }}>



            <div style={{ display: "flex" }}>



                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={dataArraylength}
                    infinite="true"
                >
                    <Typography style={{ display: 'flex' }}>
                        <Typography fontSize="small" style={{ fontWeight: 600, width: "auto", color: 'white' }}> Suggested Topics </Typography>

                        <ButtonBack style={{ marginLeft: "3.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowLeftIcon style={{ color: "white" }}> </KeyboardArrowLeftIcon></ButtonBack>
                        <ButtonNext style={{ marginLeft: "1.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowRightIcon style={{ color: "white" }}> </KeyboardArrowRightIcon ></ButtonNext>
                    </Typography>

                    <Slider>

                        {newArr.map((data, index) => {

                            console.log(index, "index is");
                            return (
                                <Slide index={index}> hello </Slide>
                            )

                        })}
        
                    </Slider>




                </CarouselProvider>



            </div>

        </div>
    );
}

