import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
// import PinDropIcon from '@material-ui/icons/PinDrop';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
// import CameraAltIcon from '@material-ui/icons/CameraAlt';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import {
//     faEdit,
//     faVolumeMute
// } from "@fortawesome/free-solid-svg-icons";

const PlaylistPopup = () => {
    return (<List component="nav">
        <div style={{fontSize:20,opacity: 0.5,color: "#000000",fontWeight:"500"}}><IconButton aria-label="add to playlist" size="small" >
                                            {
                                                <PlaylistAddOutlinedIcon
                                                    style={{ color: "blue",margin: '0 0.3vw' }}
                                                    fontSize="small"
                                                    onMouseOver={(e) => e.target.style.color = 'blue'}
                                                    onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                                />

                                            }

                                        </IconButton> Add to Playlist</div>
         <div style={{paddingLeft:16,paddingRight:16}}><input type="text" style={{paddingLeft:16,paddingRight:16,width: "84%",background: "#FFFFFF 0% 0% no-repeat padding-box",border:"1px solid #E5E5E5",borderRadius: 5,height:40,marginTop:8}} placeholder="Find people"></input></div>
        <ListItem style={{borderBottom: "1px solid #E6E6E6",fontSize:18,fontWeight:"500"}}>
            <ListItemText primary="Untitled Broadcast Playlist" />
        </ListItem>
        <ListItem style={{borderBottom: "1px solid #E6E6E6"}}>
            <ListItemText primary="UI UX Design Tutorials" />
        </ListItem>
        <ListItem style={{borderBottom: "1px solid #E6E6E6"}}>
            <ListItemText primary="Pandemic Specials" />
        </ListItem>
        <ListItem style={{borderBottom: "1px solid #E6E6E6"}}>
            <ListItemText primary="UI UX Design Tutorials" />
        </ListItem>
        <ListItem >
        <Button variant="contained" style={{background: "#F4F7FF", fontSize:16,color:"#1956E3",textTransform:"capitalize",fontweight:"600 !important"}}>+ Create New Playlist</Button>
        </ListItem>
    </List>);
}

export default PlaylistPopup;