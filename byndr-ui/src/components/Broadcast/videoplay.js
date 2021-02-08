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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Chip from '@material-ui/core/Chip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import ReportIcon from '@material-ui/icons/Report';
import MUIRichTextEditor from 'mui-rte'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ShareBroadcast, CancelPopup, PlaylistPopup } from "../common/popups";
import cardBGImg from "../../img/cardbg.png";
import {
    useParams
} from "react-router-dom";

const useStyles = makeStyles({
    // root: {
    //     height: 440,
    //     flexGrow: 1,
    //     maxWidth: "100%",
    //     overflow: "auto"
    // },
    singleBroadcastinrleft: {
        width: "70%",
        float: "left",
        paddingRight: "0",
        borderRight: "1px solid #EAEDFC",
        borderLeft: "1px solid #EAEDFC",
    },
    singleBroadcastplayerblock: {
        padding: "40px",
        float: "left"
    },
    singleTitlesection_left: {
        fontSize: 21,
        textAlign: "left",
        font: "normal normal normal 21px/26px Poppins",
        fontWeight: '500',
        width: "65%",
        float: "left",
    },
    singleTitlesection: {
        margin: "25px 0",
        width: "100%",
        float: "left",
    },
    singleBroadcastdesc: {
        borderTop: "1px solid #EAEDFC",
        borderLeft: "1px solid #EAEDFC",
        padding: "40px",
        float: "left"
    },
    singleTitlesection_controls: {
        float: "left",
        width: "35%"
    },
    singleAuthorsection: {
        width: "100%",
        float: "left"
    },
    singleAuthorsectioninr: {
        width: "100%",
        float: "left"
    },
    singleAuthorprofile: {
        width: "auto",
        float: "left",
        marginTop: "-12px"
    },
    singleAuthorprofileButton: {
        paddingLeft: 0
    },
    authorText: {
        '& span': {
            fontSize: 20,
            color: "#225DE4",
            fontWeight: "500"
        }
    },
    singleAuthorprofileconnect: {
        '& .MuiChip-root': {
            borderRadius: 4,
        }
    },
    singleBroaddesctitle: {
        textAlign: "left",
        fontSize: 20,
        color: "#000000",
        fontWeight: 500,
        marginBottom: 15
    },
    singleBroaddescontent: {
        font: "normal normal normal 18px/26px Poppins",
        color: "#000000",
        opacity: 0.8,
    },
    singleBroadcastinrright: {
        width: "29.8%",
        float: "left"
    },
    singleBroadsidebarbuttons: {
        padding: 15,
        borderBottom: "1px solid #EAEDFC",
        minHeight: 37
    },
    customButtonActive: {
        background: "#F4F7FF 0% 0% no-repeat padding-box",
        borderRadius: 5,
        boxShadow: "none",
        marginRight: 10,
        color: "#1956E3",
        float: "left",
    },
    customButton: {
        background: "#F8F8F8 0% 0% no-repeat padding-box",
        borderRadius: 5,
        boxShadow: "none",
        marginRight: 10,
        color: "#7B7C7E",
        float: "left",
    },
    customMore: {
        margin: '0 1vw',
    },
    customArraow: {

    },
    singleBroadchat: {
        width: '100%',
        float: 'left',
        height: 'calc(100% - 200px)',
        height: 'calc(100vh - 358px)',
        overflowY: 'scroll'
    },
    singleBroadchatTypin: {
        bottom: 25,
        position: 'absolute',
        padding: 10
    },
    singleChatdisplay: {
        width: '100%',
        float: 'left'
    },
    singlePlaylistdisplay: {
        width: '100%',
        float: 'left',
        height: 'calc(100vh - 173px)',
        overflowY: 'scroll',
        background: "#F7F7F7"
    },
    singlePlaylist: {
        width: '100%',
        float: 'left'
    },
    contentList:{
        float: "left",
        width: "92%",
        padding: "40px",
        background:"#F7F7F7"
    },
    viewpalylist:{
        font: "normal normal 16px/30px Poppins",
        color: "#7B7C7E",
        fontWeight:500,
        textTransform:"capitalize"
    },
    broadcasts:{
        float:"right",
        font: "normal normal 16px/30px Poppins",
        color: "#1956E3",
        fontWeight:500,
        textTransform:"capitalize"
    },
    cardTtitle:{
        font: "normal normal 16px/30px Poppins",
    },
    cardSubText:{
        font: "normal normal 18px/30px Poppins",
        color: "#1956E3",
        fontWeight:500
    },
    cardView:{
        font: "normal normal medium 16px/21px Poppins",
        color: "#7F7F7F",
        float:"right"
    },
    playlistImage:{
        width:"100%",
        height:"137px",
        borderRadius:"5px 0px 0px 5px"
    }
});

const useTreeItemStyles = makeStyles((theme) => ({

    root: {
        color: theme.palette.text.secondary,
        borderBottom: "1px solid #E5E5E5",
        '&:hover > $content': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:focus > $content, &$selected > $content': {
            backgroundColor: "#F7F7F7",
            color: 'var(--tree-view-color)',
        },
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
        },
        '& .MuiListItemSecondaryAction-root': {
            top: '32%'
        },
    },

    content: {
        color: theme.palette.text.secondary,
        /*borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),*/
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        width: 'auto'
    },
    group: {
        marginLeft: 0,
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
        background: "#F7F7F7"
    },
    expanded: { background: "#F7F7F7" },
    selected: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
        width: "100%",
        '& .MuiListItem-container': {
            width: "100%"
        }
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
    userName: {
        font: "normal normal 16px/27px Poppins",
        color: "#7B7C7E",
        fontWeight: 500
    },
    messageTime: {
        font: "normal normal 14px/23px Poppins",
        color: "#1956E3",
        fontWeight: 500,
        marginLeft: 10,
        marginTop: -5
    },
    message: {
        font: "normal normal normal 17px/24px Poppins",
        marginTop: 10
    },
    repline: {
        font: "normal normal 16px/30px Poppins",
        color: "#1956E3",
        fontWeight: 500
    }
}));


function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <div className={classes.labelRoot}>
                    <ListItem alignItems="flex-start" className={classes.listBlock}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography
                                component="span"
                                variant="body2"
                                className={classes.userName}
                                color="textPrimary"
                            >
                                Vinay C <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.messageTime}
                                    color="textPrimary"
                                >6d ago</Typography>
                            </Typography>}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.message}
                                        color="textPrimary"
                                    >
                                        {"Hello, I have a query?"}

                                    </Typography>

                                    <Typography
                                        component="p"
                                        variant="body2"
                                        className={classes.repline}
                                        color="textPrimary"
                                    >
                                        2 Replies <IconButton aria-label="add to favorites" size="small" className={classes.customArraow}>
                                            {
                                                <KeyboardArrowDownIcon fontSize="small" />
                                            }
                                        </IconButton>
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <StarBorderIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                                <ReplyIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                                <ReportIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

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
    const liveVedio = <Typography
                    component="span"
                    variant="body2"
                    style={{fontSize:"20px",color:"#000"}}
                >
                    More Broadcasts by  <Typography
                        component="span"
                        variant="body2"
                        style={{fontSize:"20px",color:"#1956E3"}}
                    >Satish N</Typography>
                </Typography>
    let [like, setLike] = React.useState(null);
    let [chat, setChat] = React.useState(null);
    let [star, setStar] = React.useState(null);
    let [playlist, setPlaylist] = React.useState(null);
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
        else if (prop === 'playlist') {
            setPlaylist(!playlist);
        }
        else if (prop === 'error') {
            setError(!error);
        }

    }

    const videoOrigin = "http://www.w3schools.com/html/mov_bbb.mp4";
    const width = '100%';
    const height = '50vh';
    const Slideheight = "23";
    const sliderWidth = "100%";
    const sliderMarginLeft = "0";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentPop, setCurrentPop] = React.useState(null)
    const [toggle, setToggle] = React.useState('chat')

    const handleClick = (event, currentOpenPop) => {
        setAnchorEl(event.currentTarget);
        setCurrentPop(currentOpenPop)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const popupBlock = <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        {currentPop == 'share' ? <ShareBroadcast /> : currentPop == 'playlist' ? <PlaylistPopup /> : <CancelPopup />}
    </Popover>

    const handleExpandClick = (e, currentTog) => {
        setToggle(currentTog)
    }

    return (
        <div>
            <div style={{ backgroundColor: "white", float: "left" }}>

                <Header />

                <div className={classes.singleBroadcast}>
                    <div className={classes.singleBroadcastinr}>
                        <div className={classes.singleBroadcastinrleft}>
                            <div class={classes.singleBroadcastplayerblock}>
                                <div className={classes.singleBroadcastplayer}>
                                    <QierPlayer
                                        width={width}
                                        height={height}
                                        language="en"
                                        showVideoQuality={false}
                                        themeColor="#abc123"
                                        srcOrigin={videoOrigin}
                                    />
                                </div>
                                <div className={classes.singleTitlesection}>
                                    <div className={classes.singleTitlesection_left}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                                    </div>
                                    <div className={classes.singleTitlesection_controls}>
                                        <IconButton aria-label="add to favorites" size="small" onClick={(() => { handleLike('like'); })} >
                                            {
                                                (like ? <FavoriteIcon style={{ color: 'red' }} fontSize="small"
                                                />
                                                    : <FavoriteBorderIcon style={{ color: 'lightgrey' }} fontSize="small"
                                                    />)
                                            }

                                        </IconButton>

                                        <IconButton aria-label="start chat" size="small" onClick={() => { handleLike('chat'); }} style={{ margin: '0 1vw' }}>
                                            {
                                                (chat ? <ChatBubbleSharpIcon style={{ color: 'blue' }} fontSize="small"
                                                />
                                                    : <ChatBubbleOutlineSharpIcon fontSize="small"
                                                    />)
                                            }

                                        </IconButton>

                                        <Typography component="span" style={{ marginTop: '0.3vh', color: "lightgrey" }}>22 Comments</Typography>


                                        <IconButton aria-label="add to started" size="small" onClick={() => { handleLike('star'); }} >
                                            {
                                                (star ? <StarIcon style={{ color: "gold" }} fontSize="small"
                                                />
                                                    : <StarBorderOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                                                    />)
                                            }

                                        </IconButton><Typography component="span" style={{ margin: '0 0.3vw', marginTop: '0.3vh', color: "lightgrey" }}>20</Typography>


                                        <IconButton aria-label="share" size="small">
                                            <ShareIcon fontSize="small"
                                                style={{ color: 'lightgrey' }}
                                                onMouseOver={(e) => e.target.style.color = 'blue'}
                                                onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                                onClick={(e) => handleClick(e, 'more')}
                                            />
                                        </IconButton>



                                        <IconButton aria-label="add to playlist" size="small" onClick={(e) => handleClick(e, 'playlist')} >
                                            {
                                                <PlaylistAddOutlinedIcon
                                                    style={{ color: "blue" }}
                                                    fontSize="small"
                                                    onMouseOver={(e) => e.target.style.color = 'blue'}
                                                    onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                                />

                                            }

                                        </IconButton>

                                        <IconButton aria-label="add to error" size="small" onClick={() => { handleLike('error'); }} >
                                            {
                                                (error ? <ErrorOutlineTwoToneIcon style={{ color: "red" }} fontSize="small"
                                                />
                                                    : <ErrorOutlineTwoToneIcon style={{ color: 'lightgrey' }} fontSize="small"
                                                    />)
                                            }

                                        </IconButton>
                                    </div>
                                </div>
                                <div className={classes.singleAuthorsection}>
                                    <div className={classes.singleAuthorsectioninr}>
                                        <div className={classes.singleAuthorprofile}>
                                            <ListItem button className={classes.singleAuthorprofileButton}>
                                                <ListItemAvatar>
                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Satish N"
                                                    className={classes.authorText}
                                                />
                                            </ListItem>
                                        </div>
                                        <div className={classes.singleAuthorprofileconnect}>
                                            <Chip variant="outlined" color="primary" label="+ connect"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={classes.singleBroadcastdesc}>
                                <div className={classes.singleBroaddesctitle}>
                                    Description
                                </div>
                                <div className={classes.singleBroaddescontent}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className={classes.contentList}>
                                <div id="liveVideo">
                                    <Videolist
                                        data={dataDummy}
                                        name={liveVedio}
                                        size={4}
                                        carouselHeight={Slideheight}
                                        sliderWidth={sliderWidth}
                                        sliderMarginLeft={sliderMarginLeft}
                                    >
                                    </Videolist>
                                </div>
                            </div>
                        </div>
                        <div className={classes.singleBroadcastinrright}>
                            <div className={classes.singleBroadsidebar}>
                                <div className={classes.singleBroadsidebarbuttons}>
                                    <Button className={classes.viewpalylist}>
                                        <IconButton aria-label="add to favorites" size="small" style={{ margin: '0 0.5vw',color:"#1956E3" }}>
                                            {
                                                <VideoLibraryIcon fontSize="small" />
                                            }
                                        </IconButton> View Playlist
                                        </Button>
                                    <Button className={classes.broadcasts}>
                                        8 Broadcasts
                                     <IconButton aria-label="add to favorites" size="small" onClick={(e) => handleExpandClick(e, 'playlist')} style={{ margin: '0 1vw' }}>
                                            {
                                                <KeyboardArrowDownIcon fontSize="small" />
                                            }
                                        </IconButton>
                                    </Button>
                                </div>

                                {/* Playlist block */}
                                {toggle == 'playlist' ? <div className={classes.singlePlaylistdisplay}>
                                    <div className={classes.singlePlaylist}>
                                        {/* start */}
                                        
                                        <ListItem style={{padding:10}} className={classes.lastChildCss}> 
                                            <ListItemAvatar style={{width:"100px"}}>
                                                <img
                                                    alt="Travis Howard"
                                                    src={cardBGImg}
                                                    className={classes.playlistImage}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Grid item xs={12}>
                                                    <Grid container justify="flex-start">
                                                        <Grid item xs={12} style={{background:"#fff",padding:10,borderRadius:"0px 5px 5px 0px"}}>
                                                            <Typography variant="body2" className={classes.cardTtitle} component="p">
                                                                Research on Machine Learning and how it lifts humanity out of the 2020 pandemic
                                                            </Typography>
                                                            <Typography variant="body2" className={classes.cardSubText} component="p">
                                                                Rakesh A <Typography variant="body2" className={classes.cardView} component="span">
                                                                <IconButton aria-label="add to playlist" size="small" ><VisibilityIcon /> </IconButton> 2,098
                                                                  </Typography>
                                                            </Typography>
                                                            
                                                        </Grid>
                                                        
                                                    </Grid>
                                                </Grid>
                                            </ListItemText>
                                        </ListItem>

                                        <ListItem style={{padding:10}} className={classes.lastChildCss}> 
                                            <ListItemAvatar style={{width:"100px"}}>
                                                <img
                                                    alt="Travis Howard"
                                                    src={cardBGImg}
                                                    className={classes.playlistImage}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Grid item xs={12}>
                                                    <Grid container justify="flex-start">
                                                        <Grid item xs={12} style={{background:"#fff",padding:10,borderRadius:"0px 5px 5px 0px"}}>
                                                            <Typography variant="body2" className={classes.cardTtitle} component="p">
                                                                Research on Machine Learning and how it lifts humanity out of the 2020 pandemic
                                                            </Typography>
                                                            <Typography variant="body2" className={classes.cardSubText} component="p">
                                                                Rakesh A <Typography variant="body2" className={classes.cardView} component="span">
                                                                <IconButton aria-label="add to playlist" size="small" ><VisibilityIcon /> </IconButton> 2,098
                                                                  </Typography>
                                                            </Typography>
                                                            
                                                        </Grid>
                                                        
                                                    </Grid>
                                                </Grid>
                                            </ListItemText>
                                        </ListItem>


                                        {/* end */}
                                    </div>
                                </div> : null}
                                {/* Playlist end */}
                                {/* Chat block */}
                                <div className={classes.singleBroadsidebarbuttons}>
                                    <Button variant="contained" className={classes.customButtonActive}>Comments</Button>
                                    <Button variant="contained" className={classes.customButton}>Q & A</Button>
                                    <Button variant="contained" className={classes.customButton}>Notes</Button>
                                    <div className={classes.singleBroadsidebarNavs}>
                                        <IconButton aria-label="add to favorites" size="small" onClick={(e) => handleClick(e, 'more')} className={classes.customMore}>
                                            {
                                                <MoreVertIcon fontSize="small" />
                                            }
                                        </IconButton>
                                        <IconButton aria-label="add to favorites" size="small" onClick={(e) => handleExpandClick(e, 'chat')} className={classes.customArraow}>
                                            {
                                                <KeyboardArrowDownIcon fontSize="small" />
                                            }
                                        </IconButton>
                                        {anchorEl ? popupBlock : null}
                                    </div>
                                </div>

                                {toggle == 'chat' ? <div className={classes.singleChatdisplay}>
                                    <div className={classes.singleBroadchat}>
                                        {/* start */}
                                        <TreeView
                                            className={classes.root}
                                            defaultExpanded={['3']}
                                            /*defaultCollapseIcon={<ArrowDropDownIcon />}*/
                                            /*defaultExpandIcon={<ArrowRightIcon />}*/
                                            defaultEndIcon={<div style={{ width: 24 }} />}
                                        >
                                            <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />

                                            <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                                                <StyledTreeItem
                                                    nodeId="5"
                                                    labelText="Social"
                                                    labelIcon={SupervisorAccountIcon}
                                                    labelInfo="90"
                                                    color="#1a73e8"
                                                    bgColor="#e8f0fe"
                                                />
                                                <StyledTreeItem
                                                    nodeId="6"
                                                    labelText="Updates"
                                                    labelIcon={InfoIcon}
                                                    labelInfo="2,294"
                                                    color="#e3742f"
                                                    bgColor="#fcefe3"
                                                />
                                                <StyledTreeItem
                                                    nodeId="7"
                                                    labelText="Forums"
                                                    labelIcon={ForumIcon}
                                                    labelInfo="3,566"
                                                    color="#a250f5"
                                                    bgColor="#f3e8fd"
                                                />
                                                <StyledTreeItem
                                                    nodeId="8"
                                                    labelText="Promotions"
                                                    labelIcon={LocalOfferIcon}
                                                    labelInfo="733"
                                                    color="#3c8039"
                                                    bgColor="#e6f4ea"
                                                />
                                            </StyledTreeItem>
                                            <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
                                        </TreeView>
                                        {/* end */}
                                    </div>
                                    <div className={classes.singleBroadchatTypin}>
                                        <div className={classes.inputChat}>
                                            <MUIRichTextEditor style={{ position: "relative" }}
                                                label="Try selecting some text to show the inline toolbar..."
                                                inlineToolbar={true}
                                                inlineToolbarControls={["bold", "italic", "my-style", "link"]}
                                                customControls={[
                                                    {
                                                        name: "my-style",
                                                        icon: <InvertColorsIcon />,
                                                        type: "inline",
                                                        inlineStyle: {
                                                            backgroundColor: "black",
                                                            color: "white"
                                                        }
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div> : null}
                                {/* Chat block end */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Videoplay;

