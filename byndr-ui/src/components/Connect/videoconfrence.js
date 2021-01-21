import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';



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

