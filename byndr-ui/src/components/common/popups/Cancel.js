import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const CancelPopup = () => {
    return (<List component="nav"  >
        <ListItem button>
            <ListItemIcon>
                <AccountCircleOutlinedIcon />
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
                <VolumeMuteIcon />
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