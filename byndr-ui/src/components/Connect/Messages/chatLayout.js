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
import { CallReceived } from "@material-ui/icons";


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
        float: "left",
        marginBottom: 33,
        margin: "5px",
        padding: "10px",
    },
    left: {
        fontFamily: 'Poppins',
        fontize:17,
        justifyContent: "flex-start !important",
        opacity: 1,
        left: 0,
        width: "90%",
        marginRight: "50%"
    },
    right: {
        fontFamily: 'Poppins',
        fontsize:17,
        justifyContent: "flex-end !important",
        opacity: 1,
        right: 0,
        width: "90%",
        marginLeft: "10%"
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
        width:"100%",
        float:"left"
    },
    messageview:{
        float:"right",
        textAlign:"right",
        color: "#000000",
        opacity: "0.5",
        fontFamily: 'Poppins',
        fontsize:12,
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
            messageTiem: "11:52 AM",
            message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
            direction: "right",
            messageview:"seen"
        },
       
    ];

    const chatBubbles = dummyData.map((obj, i = 0) => (
        <div className={` ${obj.direction} ${obj.direction === 'right' ? classes.right : classes.left}`} key={i} >
            <div key={i++} className={classes.bubble}>
                {obj.direction === 'left' && <Grid container justify="flex-start" spacing={2} style={{width:70,float:"left"}}>
                    <Grid item xs={12}>
                        <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                        />

                    </Grid>
                    
                </Grid>
                }
                <Grid container justify="flex-start" spacing={2} style={{width:"calc(100% - 50px)",float:"right"}}>
                <Grid item xs={4}>
                        <Typography variant="body2" className={classes.cardTtitle} component="span">
                            {obj.username}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} style={{textAlign:"right"}}>
                        <Typography variant="body2" className={classes.messageTiemcls} component="span">
                            {obj.messageTiem}
                        </Typography>
                    </Grid>
                    <Grid item xs={obj.direction === 'right'? 11 :9}> <div className={obj.direction === 'right' ? classes.messageContentRight : classes.messageContentLeft}>{obj.message}</div>
                    <Typography className={classes.messageview}>{obj.messageview}</Typography></Grid>
                    <Grid item xs={obj.direction === 'right'? 1 :3}>{obj.direction === 'right' ? <Avatar
                        alt="Howard"
                        src="/static/images/avatar/2.jpg" style={{backgroundColor:"#0B224F"}}
                    /> : <> <ReplyOutlinedIcon color="primary" fontSize="small" /><ShareOutlinedIcon color="primary" fontSize="small" style={{marginLeft:5,marginRight:5}}/><FileCopyOutlinedIcon color="primary" fontSize="small" /></>}</Grid>
                </Grid>


            </div>
        </div >
    ));
    return <div className={classes.container}><div className={classes.container} style={{float: "left",marginBottom:"15%"}}>{chatBubbles}</div>
        <div className={classes.inputChat} style={{loat: "left",
            width: "calc(100% - 1px)",
            paddingTop: 0,
            border: "1px solid #dfdfdf",
            background: "#fff",
            bottom: 0,
            position: "fixed",
            minHeight:100,
            paddingLeft:20}}>
            <MUIRichTextEditor style={{position: "relative"}}
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
