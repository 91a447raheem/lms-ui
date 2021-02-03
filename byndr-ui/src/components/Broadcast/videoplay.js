import React from 'react';
// import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
// import Datacard from '../Connect/datacard';
// import { Card, Divider, Typography } from '@material-ui/core';
import Header from '../common/header';
import { useHistory } from "react-router-dom";
// import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Divider, Typography } from '@material-ui/core';
import Videolist from './videolist';
import QierPlayer from 'qier-player';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import ErrorOutlineTwoToneIcon from '@material-ui/icons/ErrorOutlineTwoTone';
import {
    useParams
} from "react-router-dom";


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

const Videoplay = (props) => {

    let [like, setLike] = React.useState(null);
    let [chat, setChat] = React.useState(null);
    let [star, setStar] = React.useState(null);
    let [playlist , setPlaylist] = React.useState(null);
    let [error, setError] = React.useState(null);

    const history = useHistory();
    const classes = useStyles();
    let nextVideo = "More Broadcast By name";

    let params = useParams();


    const handleLike = (prop) => {
        if (prop === 'like') {
            setLike(!like);
        }
        else if (prop === 'chat') {
            setChat(!chat);
        }
        else if (prop === 'star') {
            setStar(!star);
        }
        else if(prop === 'playlist'){
            setPlaylist(!playlist);
        }
        else if (prop === 'error'){
            setError(!error);
        }

    }

    const videoOrigin = "http://www.w3schools.com/html/mov_bbb.mp4";
    const width = '100%';
    const height = '50vh';
    const Slideheight = "23";


    return (
        <div>
            <div style={{ backgroundColor: "white" }}>

                <Header />

                <div style={{ borderRight: '2px solid lightgrey', width: '70vw' }}>

                    <div style={{ width: '90%', height: '100%', border: '1px solid blue', marginLeft: '6vw', marginTop: '3vh' }}>
                        <QierPlayer
                            width={width}
                            height={height}
                            language="en"
                            showVideoQuality={false}
                            themeColor="#abc123"
                            // src480p={video480p}
                            // src720p={video720p}
                            srcOrigin={videoOrigin}
                        />
                    </div>

                    <div style={{ width: '100%', marginLeft: '6vw' }}>

                        <div style={{ display: 'flex', marginTop: '3vh', justifyContent: 'space-between', width: '90%' }}>

                            <span>title-video</span>

                            <div style={{ marginLeft: '0vw', display: "flex", justifyContent: 'space-between' }}>

                                <IconButton aria-label="add to favorites" size="small" onClick={(() => { handleLike('like'); })} style={{margin: '0 1vw'}}>
                                    {
                                        (like ? <FavoriteIcon style={{ color: 'red' }} fontSize="small"
                                        />
                                            : <FavoriteBorderIcon style={{ color: 'lightgrey' }} fontSize="small"
                                            />)
                                    }

                                </IconButton>

                                <IconButton aria-label="start chat" size="small" onClick={() => { handleLike('chat'); }} style={{margin: '0 1vw'}}>
                                    {
                                        (chat ? <ChatBubbleSharpIcon style={{ color: 'blue' }} fontSize="small"
                                        />
                                            : <ChatBubbleOutlineSharpIcon fontSize="small"
                                            />)
                                    }

                                </IconButton>

                                <Typography component="span" style={{margin: '0 1vw', marginTop: '0.3vh', color: "lightgrey"}}>20</Typography>


                                <IconButton aria-label="share" size="small" style={{margin: '0 1vw'}}>
                                    <ShareIcon fontSize="small"
                                        style={{ color: 'lightgrey' }}
                                        onMouseOver={(e) => e.target.style.color = 'blue'}
                                        onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                    />
                                </IconButton>

                                <IconButton aria-label="add to started" size="small" onClick={() => { handleLike('star'); }} style={{margin: '0 1vw'}}>
                                    {
                                        (star ? <StarIcon style={{ color: "gold" }} fontSize="small"
                                        />
                                            : <StarBorderOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                                            />)
                                    }

                                </IconButton>

                                <IconButton aria-label="add to playlist" size="small" onClick={() => { handleLike('playlist'); }} style={{margin: '0 1vw'}}>
                                    {
                                        (playlist ? <PlaylistAddOutlinedIcon style={{ color: "blue" }} fontSize="small"
                                        />
                                            : <PlaylistAddOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                                            />)
                                    }

                                </IconButton>

                                <IconButton aria-label="add to error" size="small" onClick={() => { handleLike('error'); }} style={{margin: '0 1vw'}}>
                                    {
                                        (error ? <ErrorOutlineTwoToneIcon style={{ color: "red" }} fontSize="small"
                                        />
                                            : <ErrorOutlineTwoToneIcon style={{ color: 'lightgrey' }} fontSize="small"
                                            />)
                                    }

                                </IconButton>

                            </div>

                        </div>

                        <div style={{ display: 'flex', marginTop: '2vh', justifyContent: 'space-between', width: '80%' }}>
                            <div style={{ display: "flex" }}>
                                <Avatar></Avatar>
                                <span style={{ marginLeft: '1.5vw', marginTop: '1vh' }}>name</span>
                                <div style={{ width: 'fit-content', height: 'fit-content', border: '1px solid blue', cursor: 'pointer', marginLeft: '2vw', borderRadius: '5px', textAlign: 'center', marginTop: '0vh', padding: '0.5em' }}>+connect</div>
                            </div>
                            <div style={{ marginTop: '1vh' }}>date</div>
                        </div>

                    </div>
                    <Divider style={{ marginLeft: '0vw', width: '70vw', marginTop: '2vh' }} />

                    <div style={{ marginLeft: '6vw', marginTop: '2vh', border: '1px solid blue', width: '90%', height: '10vh' }}>Description 
                                <Typography component="p" style={{margin: '2px'}}>{params.vid}</Typography></div>

                </div>

            </div>
            <div style={{ marginTop: '3vh', width: '70%' }}>

                <Videolist
                    data={dataDummy}
                    name={nextVideo}
                    size={3}
                    carouselHeight={Slideheight}

                >
                </Videolist>

            </div>
        </div>
    );
}

export default Videoplay;

