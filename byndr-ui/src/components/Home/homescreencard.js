import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
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


const Homescreencard = props => {

    const classes = useStyles();
    let [like, setLike] = React.useState(null);
    let [chat, setChat] = React.useState(null);
    let [star, setStar] = React.useState(null);

    const name  = props.data[1];
    const [isLiked, updateLike] = useState(false);

    const handleLike = (prop) => {
        console.log(prop);
        let currentLikedBands = props.likedCards;
        console.log(currentLikedBands);
        if (!isLiked) {
            updateLike(true);
            if (!currentLikedBands.includes(name))
            {
                props.updatelikedCards([...currentLikedBands, name]);
                if (prop === "like"){
                    setLike(true);
                }else if(prop === "chat"){
                    setChat(true);
                }else if(prop === 'star'){
                    setStar(true);
                }
            
            }
        } else {
            updateLike(false);
            if (currentLikedBands.includes(name))
            {
                props.updatelikedCards(currentLikedBands.filter(data => data !== name));
                if (prop === "like"){
                    setLike(null);
                }else if(prop === "chat"){
                    setChat(null);
                }else if(prop === 'star'){
                    setStar(null);
                }
            }
        }
    };

    return (
        <Card className={classes.root} key={name}>
            <Typography component="span">Card no: {name}</Typography>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    style={{ margin: "0.5vw" }}
                />
                <CardContent style={{ display: 'flex', padding: 0, margin: "0.75vw" }}>

                    <Typography variant="body2" color="textSecondary" component="p" style={{ padding: 0, }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                    </Typography>

                    <IconButton aria-label="settings" style={{ padding: 0, display: "flex", alignItems: "baseline" }} size="small">
                        <MoreVertIcon fontSize="small" style={{ color: "lightgrey" }} />
                    </IconButton>

                </CardContent>

                <CardContent style={{ display: 'flex', padding: "5px 0px 1px 0px ", margin: "0px 0.5vw" }}>
                    <Typography component="span" color="primary" style={{ fontSize: 'small', padding: 0 }}> By</Typography>
                    <Typography component="span" color="primary" style={{ fontSize: 'small', padding: 0, marginLeft: "1.5em" }}> Time</Typography>
                    <VisibilityOutlinedIcon fontSize="small" style={{ padding: 0, marginLeft: "1.5em" }} />
                    <Typography component="span" color="primary" style={{ fontSize: 'small', padding: 0, marginLeft: "1.5em" }}> Views</Typography>
                    <Typography component="span" color="primary" style={{ fontSize: 'small', padding: "0px 2px", marginLeft: "1.5em" }}> icon</Typography>
                </CardContent>

                <Divider style={{ margin: "3px 0px" }}></Divider>



            </CardActionArea>
            <CardActions style={{ padding: 0, margin: "0px 0.25vw" }}>
                <IconButton aria-label="add to favorites" size="small" onClick={(() => {  handleLike('like'); })}>
                    {
                        (like ? <FavoriteIcon style={{ color: 'red' }} fontSize="small"
                        />
                            : <FavoriteBorderIcon style={{ color: 'lightgrey' }} fontSize="small"
                            />)
                    }

                </IconButton>

                <IconButton aria-label="start chat" size="small" onClick={() => {  handleLike('chat'); }} style={{ marginLeft: "1.0em" }}>
                    {
                        (chat ? <ChatBubbleSharpIcon style={{ color: 'blue' }} fontSize="small"
                        />
                            : <ChatBubbleOutlineSharpIcon fontSize="small"
                            />)
                    }

                </IconButton>

                <IconButton aria-label="share" size="small" style={{ marginLeft: '4em' }}>
                    <ShareIcon fontSize="small"
                        style={{ color: 'lightgrey' }}
                        onMouseOver={(e) => e.target.style.color = 'blue'}
                        onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                    />
                </IconButton>

                <IconButton aria-label="add to started" size="small" onClick={() => {  handleLike('star'); }}>
                    {
                        (star ? <StarIcon style={{ color: "gold" }} fontSize="small"
                        />
                            : <StarBorderOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                            />)
                    }

                </IconButton>

            </CardActions>
        </Card>
    );
}

export default Homescreencard;