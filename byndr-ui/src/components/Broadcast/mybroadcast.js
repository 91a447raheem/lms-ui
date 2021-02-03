import React from 'react';
import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Card, Divider, Typography } from '@material-ui/core';
import Header from '../common/header';
import { useHistory } from "react-router-dom";
import Datacard from './dataCard';



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
        marginLeft: "6.5vw",

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
        marginLeft: "13vw"
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
        marginLeft: "1vw",
    },


    Show: {
        marginLeft: "13vw",
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
        marginLeft: "2vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '10ch',
            marginLeft: "13vw",
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

export default function Mybroadcast() {

    const history = useHistory();
    const [likedCards, updatelikedCards] = React.useState([]);
    const classes = useStyles();


    return (
        <div style={{ backgroundColor: "white", height: "100%" }}>
            <Header />
            <div style={{ display: "flex", marginTop: "2vh" }}>
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

                <div className={classes.selectwrapper} >

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


            <div>
                <div style={{ marginLeft: "6vw", marginTop: '2vh', width: '63vw', backgroundColor: "gold", padding: "1em", borderRadius: '15px', display: 'flex' , justifyContent: 'space-between'}}>

                    <Typography variant="h4" style={{fontSize: '2.215vw', alignItems: "center"}}>
                        Let's Start a Broadcast!
                    </Typography>
                    <div style={{ display: "flex", flexFlow: "nowrap", height: 'fit-content'}}>
                        <div style={{ border: '1px solid black', borderRadius: '4px', padding: '0.15em', backgroundColor: 'white', cursor: 'pointer', width: 'auto', textAlign: 'center' }}
                            onClick={() => { console.log('hello'); history.push('/broadcast/startbroadcast') }}
                        >

                            <Typography style={{ marginTop: '.75vh', width: 'auto',textOverflow: "ellipsis", whiteSpace: 'nowrap', overflow: 'hidden' }}>New Broadcast</Typography>

                        </div>
                        <div style={{ border: '1px solid black', borderRadius: '4px', padding: '0.25em', marginLeft: '0.5vw', cursor: 'pointer', width: 'auto', textAlign: 'center' }}
                            onClick={() => { console.log('hello'); history.push('/broadcast/uploadvideo') }}
                        >
                            <Typography style={{ marginTop: '.55vh', width: 'auto' , textOverflow: "ellipsis", whiteSpace: 'nowrap', overflow: 'hidden'}}> Upload Video</Typography>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ display: "flex", flexFlow: "wrap", width: "80vw", margin: "2vw 0vw 2vw 6vw" }}>

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
                <div style={{ width: '27%', marginTop: '-10vh' }}>
                    <Typography variant="h6"> Your Broadcast in Numbers</Typography>
                    <Card style={{ marginRight: '1vw', marginTop: '2vh' }}>
                        <div style={{ padding: '2vw 2vh' }}>
                            <Typography variant="h2" style={{ textAlign: "center" }}>
                                24
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}> Live Broadcasts</Typography>
                        </div>
                        <Divider />
                        <div style={{ padding: '2vh 3vw' }}>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Views</span> <span >104568</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Likes</span> <span >100</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Comments</span><span>10</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Faviourets</span><span>1089</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Shared</span><span>10000</span></Typography>

                        </div>
                    </Card>
                    <Card style={{ marginRight: '1vw', marginTop: '1vh' }}>
                        <div style={{ padding: '2vw 2vh' }}>
                            <Typography variant="h2" style={{ textAlign: "center" }}>
                                24
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}> Live Broadcasts</Typography>
                        </div>
                        <Divider />
                        <div style={{ padding: '2vh 3vw' }}>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Views</span> <span >104568</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Likes</span> <span >100</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Comments</span><span>10</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Faviourets</span><span>1089</span></Typography>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ textAlign: 'left', marginLeft: '1vw' }}>Shared</span><span>10000</span></Typography>

                        </div>
                    </Card>
                </div>

            </div>

        </div>
    );
}

