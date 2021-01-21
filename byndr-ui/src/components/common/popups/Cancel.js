import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faVolumeMute
} from "@fortawesome/free-solid-svg-icons";

const CancelPopup = () => {
    return (<List component="nav"  >
        <ListItem button>
            <ListItemIcon>
                <FontAwesomeIcon icon={faEdit} size={"lg"} />
            </ListItemIcon>
            <ListItemText primary="Rename" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Leave" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Participant" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PersonAddDisabledIcon />
            </ListItemIcon>
            <ListItemText primary="Remove Participant" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FontAwesomeIcon icon={faVolumeMute} size={"lg"} />
            </ListItemIcon>
            <ListItemText primary="Mute Group" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PhotoCameraIcon />
            </ListItemIcon>
            <ListItemText primary="Change Image" />
        </ListItem>
    </List>);
}

export default CancelPopup;