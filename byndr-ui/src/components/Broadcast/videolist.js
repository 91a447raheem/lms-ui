import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Datacard from './dataCard';
import { useParams} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 270,
        margin: '1vw 0 1vw 0 ',
        WebkitFlexFlow: 'column',
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0),
            marginLeft: theme.spacing(10),
            width: 235,
        },
    },

    // selectwrapper: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(0),
    //     marginLeft: 0,
    //     width: 'auto',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(1.5),
    //         width: 'auto',
    //     },
    // },
    // selectShow: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: 'lightgrey',
    //     marginLeft: "2vw"
    // },

    // selectSortby: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: 'lightgrey',
    //     marginLeft: "39vw",
    //     [theme.breakpoints.down('md')]: {
    //         marginLeft: "23vw",
    //     },
    // },

    // Show: {
    //     marginLeft: "2vw",
    //     padding: theme.spacing(0, 0, 0, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '20ch',
    //     [theme.breakpoints.down('md')]: {
    //         width: '13ch',
    //     },
    // },
    // Sortby: {
    //     marginLeft: "38vw",
    //     padding: theme.spacing(0, 0, 0, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '20ch',
    //     [theme.breakpoints.down('md')]: {
    //         width: '10ch',
    //         marginLeft: "23vw",
    //     },
    // },
    // Participants: {
    //     // marginLeft: "0.1vw",
    //     padding: theme.spacing(0, 0, 0, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '20ch',
    //     [theme.breakpoints.down('md')]: {
    //         width: '13ch',
    //     },
    // }
}));

const Videolist = props => {

    const [likedCards, updatelikedCards] = React.useState([]);
    const VideoCateogry = props.name;

    const dataIncoming = props.data;
    // const classes = useStyles();

    const arraySize = props.size;

    const Slideheight = props.carouselHeight;

    let params = useParams();



    const chunk = (array, size) => {
        const chunkedArr = [];
        let index = 0;
        while (index < array.length) {
            chunkedArr.push(array.slice(index, size + index));
            index += size;
        }
        return chunkedArr;
    }
    const groupArray = chunk(dataIncoming, arraySize);
    let dataArraylength = groupArray.length;

    return (
        <div style={{ marginLeft: '6vw', marginTop: '0vh', width: '90%' }}>


            <CarouselProvider
                naturalSlideWidth={75}
                naturalSlideHeight={Slideheight}
                totalSlides={dataArraylength}
                infinite="true"
            >
                <Typography style={{ display: 'flex', justifyContent: 'space-between' }} component="div">
                    <Typography fontSize="small" style={{ fontWeight: 600, width: "fit-content", color: 'black' }} component="p"> {VideoCateogry} </Typography>

                    <div>
                        <ButtonBack style={{ marginLeft: "0", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowLeftIcon style={{ color: "black" }}> </KeyboardArrowLeftIcon></ButtonBack>
                        <ButtonNext style={{ marginLeft: "0", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowRightIcon style={{ color: "black" }}> </KeyboardArrowRightIcon ></ButtonNext>
                    </div>
                </Typography>

                <Slider >

                    {groupArray.map((data, index) => {

                        return (
                            <Slide index={index} >
                                <div style={{ display: "flex", width: 'auto' }}>

                                    {
                                        data.map((data) => {
                                            return (

                                                <Datacard
                                                    data={data}
                                                    updatelikedCards={updatelikedCards}
                                                    likedCards={likedCards}
                                                    videoid={params.id}

                                                >

                                                </Datacard>
                                            )
                                        })
                                    }
                                </div>
                            </Slide>
                        )

                    })}

                </Slider>

            </CarouselProvider>

        </div>
    );
}

export default Videolist;
