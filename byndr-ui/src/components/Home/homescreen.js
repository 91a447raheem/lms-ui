import React from 'react';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Navigationbar from '../common/navigationbar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';



const useStyles = makeStyles((theme) => ({
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
    Cardlayer: {
        display: "flex",
        flexFlow: "wrap",
        marginTop: theme.spacing(1.5),
        marginLeft: theme.spacing(12),

        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(1.5),
            marginLeft: theme.spacing(1.5),
        },
    },
    rightCard: {
        padding: 0,
        maxWidth: 235,
        marginLeft: theme.spacing(0),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0.2),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(13),
            width: "auto",
            padding: 0
        },
    },
    outerDiv: {
        display: "flex",

        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0),
            marginLeft: theme.spacing(0),
            width: '100%',
            padding: 0,
            flexFlow: 'wrap'
        },
    },
    Defaultcard: {
        padding: 20,
        width: "70em",

        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0.2),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(14),
            width: "25%",
            padding: 20
        },

    },
})
);

// const DialogContent = withStyles((theme) => ({
//     root: {
//         padding: '0.5rem 4rem',
//         textAlign: 'center',
//         margin: '0.75rem 0 0 0 '
//     },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '0.5rem 4rem',
//         margin: '0 0 1rem 0'
//     },
// }))(MuiDialogActions);



let dataDummy = [
    { 1: "1" },
    { 1: "2" },
    { 1: "3" },
    { 1: "4" },
    { 1: "5" },
    { 1: "6" },
    { 1: "7" },
    { 1: "8" }
]

// console.log(dataDummy.length);

export default function HomeScreen() {

    
    const classes = useStyles();

    // const history = useHistory();

    // const [open] = React.useState(true);

    // function handleSubmit() {
    //     console.log("i am inside callback !!! hurray");
    //     history.push("/login");
    // }

    // var arr = [1,2,3,4,5,6,7,8,9,0,-1]

    // var newArr = [];
    // while(arr.length) newArr.push(arr.splice(0,2));

    // console.log(newArr.length)





    let [like, setLike] = React.useState(null);
    let [chat, setChat] = React.useState(null);
    let [star, setStar] = React.useState(null);


    const Toggle = (prop) => () => {
        if (prop === "like")
            (like ? setLike(null) : setLike(true));
        else if (prop === "chat")
            (chat ? setChat(null) : setChat(true));
        else if (prop === 'star')
            (star ? setStar(null) : setStar(true));
    }


    return (

        <div >

            <Header></Header>
            <div style={{ marginTop: '0.15rem' }}>
                <Navigationbar></Navigationbar>

            </div>
            <Sidebar></Sidebar>

            <div className={classes.outerDiv}>

                <div className={classes.Cardlayer}>
                    {
                        dataDummy.map((data) =>
                            <Card className={classes.root} >
                                <Typography component="span">Card no: {data[1]}</Typography>
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
                                        {/* <Typography gutterBottom variant="h5" component="h5">
                            Lizard
          </Typography> */}
                                        <Typography variant="body2" color="textSecondary" component="p" style={{ padding: 0, }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                            {/* ranging */}
                                            {/* across all continents except Antarctica */}
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
                                    <IconButton aria-label="add to favorites" size="small" onClick={Toggle('like')}>
                                        {
                                            (like ? <FavoriteIcon style={{ color: 'red' }} fontSize="small"
                                            />
                                                : <FavoriteBorderIcon style={{ color: 'lightgrey' }} fontSize="small"
                                                />)
                                        }

                                    </IconButton>

                                    <IconButton aria-label="start chat" size="small" onClick={Toggle('chat')} style={{ marginLeft: "1.0em" }}>
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

                                    <IconButton aria-label="add to started" size="small" onClick={Toggle('star')}>
                                        {
                                            (star ? <StarIcon style={{ color: "gold" }} fontSize="small"
                                            />
                                                : <StarBorderOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                                                />)
                                        }

                                    </IconButton>

                                </CardActions>
                            </Card>

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

                {/* <div className={classes.rightCard}>

                    <Card style={{ margin: 0 }}>
                        <Typography>Hello</Typography>
                    </Card>
                </div> */}
                <Divider orientation="vertical" flexItem />
                <div className={classes.Defaultcard}>

                    <div>
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={40}
                            totalSlides={3}
                        >
                            <p style={{ display: 'flex' }}>
                                <Typography fontSize="small" style={{ fontWeight: 600, width: "auto" }}> Suggested Topics </Typography>

                                <ButtonBack style={{ marginLeft: "3.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowLeftIcon> </KeyboardArrowLeftIcon></ButtonBack>
                                <ButtonNext style={{ marginLeft: "1.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowRightIcon> </KeyboardArrowRightIcon></ButtonNext>
                            </p>
                            <Divider variant="fullWidth" style={{ marginTop: "0.5rem" }} />

                            <Slider>
                                <Slide index={0}>
                                    <Card style={{ marginTop: "1rem", padding: "0.5rem" }}>
                                        <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                            <Avatar></Avatar>
                                            <div>
                                                <Typography style={{ marginLeft: "0.7em", fontSize: "0.95em", fontWeight: 'bold' }}>TED - Ed</Typography>
                                                <Typography style={{ marginLeft: "1.1em", fontSize: "12px", fontWeight: "100" }}>youtube.com</Typography>
                                            </div>
                                            <div>
                                                <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>84</Typography>
                                                <Typography style={{ marginLeft: "1.2em", fontSize: "12px", fontWeight: "100" }}>Articles</Typography>
                                            </div>
                                            <div>
                                                <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>202K</Typography>
                                                <Typography style={{ marginLeft: "1.5em", fontSize: "12px", fontWeight: "100" }}>Followers</Typography>
                                            </div>
                                            <div>
                                                <button style={{ border: "none", backgroundColor: 'aliceblue', color: "blue", fontSize: "0.75em", padding: "12px", marginTop: "5px", borderRadius: "3px", cursor: "pointer" }}>Follow</button>
                                            </div>
                                        </div>

                                    </Card>
                                    <Card style={{ marginTop: "1rem", padding: "0.5rem" }}>
                                        <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                            <Avatar></Avatar>
                                            <div>
                                                <Typography style={{ marginLeft: "0.7em", fontSize: "0.95em", fontWeight: 'bold' }}>TED - Ed</Typography>
                                                <Typography style={{ marginLeft: "1.1em", fontSize: "12px", fontWeight: "100" }}>youtube.com</Typography>
                                            </div>
                                            <div>
                                                <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>84</Typography>
                                                <Typography style={{ marginLeft: "1.2em", fontSize: "12px", fontWeight: "100" }}>Articles</Typography>
                                            </div>
                                            <div>
                                                <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>202K</Typography>
                                                <Typography style={{ marginLeft: "1.5em", fontSize: "12px", fontWeight: "100" }}>Followers</Typography>
                                            </div>
                                            <div>
                                                <button style={{ border: "none", backgroundColor: 'aliceblue', color: "blue", fontSize: "0.75em", padding: "12px", marginTop: "5px", borderRadius: "3px", cursor: "pointer" }}>Follow</button>
                                            </div>
                                        </div>

                                    </Card>
                                </Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                                <Slide index={2}>I am the third Slide.</Slide>
                            </Slider>

                        </CarouselProvider>
                    </div>

                    <div>
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={40}
                            totalSlides={3}
                        >
                            <p style={{ display: 'flex' }}>
                                <Typography fontSize="small" style={{ fontWeight: 600, width: "auto" }}> Suggested Topics </Typography>

                                <ButtonBack style={{ marginLeft: "3.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowLeftIcon> </KeyboardArrowLeftIcon></ButtonBack>
                                <ButtonNext style={{ marginLeft: "1.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowRightIcon> </KeyboardArrowRightIcon></ButtonNext>
                            </p>
                            <Divider variant="fullWidth" style={{ marginTop: "0.5rem" }} />

                            <Slider>
                                <Slide index={0}>
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <Card style={{ marginTop: "1rem", maxWidth: 180 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="70"
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                    style={{ margin: "0.5vw" }}
                                                />
                                                <CardContent style={{ display: 'flex', padding: 0, margin: "0.75vw" }}>
                                                    <Typography variant="body2" color="textSecondary" component="p" style={{
                                                        padding: 2, whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis"
                                                    }}>
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card style={{ marginTop: "1rem", maxWidth: 180 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="70"
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                    style={{ margin: "0.5vw" }}
                                                />
                                                <CardContent style={{ display: 'flex', padding: 0, margin: "0.75vw" }}>
                                                    <Typography variant="body2" color="textSecondary" component="p" style={{
                                                        padding: 2, whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis"
                                                    }}>
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                                <Slide index={2}>I am the third Slide.</Slide>
                            </Slider>

                        </CarouselProvider>
                    </div>

                    <div>
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={40}
                            totalSlides={3}
                        >
                            <p style={{ display: 'flex' }}>
                                <Typography fontSize="small" style={{ fontWeight: 600, width: "auto" }}> Suggested People </Typography>

                                <ButtonBack style={{ marginLeft: "3.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowLeftIcon> </KeyboardArrowLeftIcon></ButtonBack>
                                <ButtonNext style={{ marginLeft: "1.5vw", padding: 0, border: "none", background: "none", outline: "none" }} ><KeyboardArrowRightIcon> </KeyboardArrowRightIcon></ButtonNext>
                            </p>
                            <Divider variant="fullWidth" style={{ marginTop: "0.5rem" }} />

                            <Slider>
                                <Slide index={0}>
                                    <Card style={{ marginTop: "1rem", padding: "0.5rem" }}>
                                        <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                            <Avatar></Avatar>
                                            <div>
                                                <Typography style={{ marginLeft: "0.7em", fontSize: "0.95em", fontWeight: 'bold' }}>Ratish R</Typography>
                                                <Typography style={{ marginLeft: "1em", fontSize: "12px", fontWeight: "100" }}>24 Mutual</Typography>
                                            </div>

                                            <div>
                                                <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>202K</Typography>
                                                <Typography style={{ marginLeft: "1.5em", fontSize: "12px", fontWeight: "100" }}>Followers</Typography>
                                            </div>
                                            <div>
                                                <button style={{ border: "none", backgroundColor: 'blue', color: "white", fontSize: "0.75em", padding: "12px", marginTop: "5px", borderRadius: "3px", width: "7vw", cursor: "pointer" }}>Connect</button>
                                            </div>
                                        </div>

                                    </Card>
                                    <Card style={{ marginTop: "1rem", padding: "0.5rem" }}>
                                        <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                            <Avatar></Avatar>
                                            <div>
                                                <Typography style={{ marginLeft: "0.7em", fontSize: "0.95em", fontWeight: 'bold' }}>Ratish R</Typography>
                                                <Typography style={{ marginLeft: "1em", fontSize: "12px", fontWeight: "100" }}>24 Mutual</Typography>
                                            </div>

                                            <div>
                                                <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>202K</Typography>
                                                <Typography style={{ marginLeft: "1.5em", fontSize: "12px", fontWeight: "100" }}>Followers</Typography>
                                            </div>
                                            <div>
                                                <button style={{ border: "none", backgroundColor: 'blue', color: "white", fontSize: "0.75em", padding: "12px", marginTop: "5px", borderRadius: "3px", width: "7vw", cursor: "pointer" }}>Connect</button>
                                            </div>
                                        </div>

                                    </Card>
                                </Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                                <Slide index={2}>I am the third Slide.</Slide>
                            </Slider>

                        </CarouselProvider>
                    </div>
                </div>

            </div>

        </div>
    );
}
