import React from "react";
import MUIRichTextEditor from 'mui-rte'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import InvertColorsIcon from '@material-ui/icons/InvertColors'


const useStyles = makeStyles(theme => ({
    container: {
        bottom: 0
        // position: "fixed" // remove this so we can apply flex design
    },
    bubbleContainer: {
        width: "100%",
        display: "flex" //new added flex so we can put div at left and right side
        //check style.css for left and right classnaeme based on your data
    },
    bubble: {
        //border: "0.5px solid black",
        //borderRadius: "10px",
        margin: "5px",
        padding: "10px",
        display: "inline-block"
    },
    left: {
        font: "normal normal normal 17px / 24px Poppins",
        justifyContent: "flex-start !important",
        opacity: 1,
        // background: "#FFFFFF",
        border: "1px solid #F0F0F0",
        borderRadius: "15px 15px 15px 0px",
        left: 0,
        width: "50%",
        marginRight: "50%"
    },
    right: {
        font: "normal normal normal 17px / 24px Poppins",

        justifyContent: "flex-end !important",
        opacity: 1,

        right: 0,
        width: "50%",
        marginLeft: "50%"
    },
    messageTiemcls: {
        right: 0,
        width: "50%",
        marginLeft: "50%"
    },
    messageContentLeft: {
        color: "#000000",
        border: "1px solid #F0F0F0",
        borderRadius: "15px 15px 15px 0px",
        background: "#FFFFFF",
        padding: 10
    },
    messageContentRight: {
        color: "#fff",
        background: "#0B224F",
        borderRadius: "15px 15px 0px 15px",
        padding: 10
    },
    inputChat: {
        paddingTop:"15%",
    }


}));

const ChatLayout = () => {
    const classes = useStyles();
    const dummyData = [
        {
            username: "Satish Nampally",
            messageTiem: "11:52 AM",
            message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
            direction: "left"
        },
        {
            username: "Rakesh A",
            messageTiem: "11:52 AM",
            message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
            direction: "left"
        },
        {
            username: "Vinay C",
            messageTiem: "11:52 AM",
            message: "Hello, I have a query?Hello, I have a query?",
            direction: "left"
        },
        {
            username: "",
            messageTiem: "",
            message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
            direction: "right"
        },
       
    ];

    const chatBubbles = dummyData.map((obj, i = 0) => (
        <div className={` ${obj.direction} ${obj.direction === 'right' ? classes.right : classes.left}`} key={i}>
            <div key={i++} className={classes.bubble}>
                {obj.direction === 'left' && <Grid container justify="flex-start" spacing={2}>
                    <Grid item xs={3}>
                        <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                        />

                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2" className={classes.cardTtitle} component="span">
                            {obj.username}
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="body2" className={classes.messageTiemcls} component="span">
                            {obj.messageTiem}
                        </Typography>
                    </Grid>
                </Grid>
                }
                <Grid container justify="flex-start" spacing={2}>
                    <Grid item xs={9}> <div className={obj.direction === 'right' ? classes.messageContentRight : classes.messageContentLeft}>{obj.message}</div></Grid>
                    <Grid item xs={3}>{obj.direction === 'right' ? <Avatar
                        alt="Howard"
                        src="/static/images/avatar/2.jpg"
                    /> : <> <ReplyOutlinedIcon color="primary" fontSize="small" /><ShareOutlinedIcon color="primary" fontSize="small" /><FileCopyOutlinedIcon color="primary" fontSize="small" /></>}</Grid>
                </Grid>


            </div>
        </div >
    ));
    return <div className={classes.container}>{chatBubbles}
        <div className={classes.inputChat}>
            <MUIRichTextEditor
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
    </div>;
};

export default ChatLayout;
