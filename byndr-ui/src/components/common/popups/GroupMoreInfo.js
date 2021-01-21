import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PinDropIcon from '@material-ui/icons/PinDrop';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faVolumeMute
} from "@fortawesome/free-solid-svg-icons";


const GroupMoreInfoPopup = () => {
    return (<List component="nav"  >
        <ListItem button>
            <ListItemIcon>
                <PinDropIcon />
            </ListItemIcon>
            <ListItemText primary="Pin to Top" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FontAwesomeIcon icon={faEdit} size={"lg"} />
            </ListItemIcon>
            <ListItemText primary="Rename" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ExitToAppOutlinedIcon />
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
                <CameraAltIcon />
            </ListItemIcon>
            <ListItemText primary="Change Image" />
        </ListItem>
    </List>);
}

export default GroupMoreInfoPopup;