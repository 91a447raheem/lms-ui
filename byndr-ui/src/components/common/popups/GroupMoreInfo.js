import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

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
                <AccountCircleOutlinedIcon />
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
                <VolumeMuteIcon />
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