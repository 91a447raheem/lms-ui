import {
    Avatar,
    Button,
    Grid,
    makeStyles,
    Typography,
    IconButton,
} from "@material-ui/core";





import React from "react";

import ChatCard from '../../common/Cards/chatCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faCertificate,
    faCog,
    faLayerGroup,
    faNewspaper,
    faPaperPlane,
    faUserCircle,
    faUsers,
    faVideo,
  } from "@fortawesome/free-solid-svg-icons";
  import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    accoutTypo: {
        textAlign: "center",
        font: "normal normal normal 16px/22px Poppins",
        letterSpacing: 0.24,
        color: "#000000",
        opacity: 0.7
    },
    accountTitle: {
        textAlign: "left",
        font: "normal 21px",
        letterSpacing: "0px",
        color: "#000000",
        opacity: 0.5
    },
    m_p_left_25: {
        paddingLeft: 25,
        marginRight: 25
    },
    m_top_25: {
        marginTop: 25,
    },
    centerAlign:{
        textAlign:"center",
        paddingBottom: 0,
        height: 60,
        
    }
}));

export default function ChatList() {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            spacing={2}
            // style={{ paddingTop: 40 }}
        >
            <Grid item className={classes.centerAlign}>
                <Button style={{
                        textAlign: "center",
                        fontFamily: 'Poppins',
                        borderRadius: 5,
                        background: '#F4F7FF 0% 0% no-repeat padding-box',
                        color: '#1956E3',
                        fontWeight: '500',
                        fontSize:18,
                        textTransform: "capitalize",
                        boxShadow:"none",
                        width:"90%"
                    }}>
                    <FontAwesomeIcon icon={faUsers} size={"lg"} style={{marginRight: 10}}/>    Create Chat Group
                </Button>
            </Grid>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                return (
                    <Grid item sm={12} key={value} style={{padding:0}} >
                        <ChatCard />
                    </Grid>
                );
            })}
        </Grid>
    );
}
