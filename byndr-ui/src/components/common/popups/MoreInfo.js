import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ReportIcon from '@material-ui/icons/Report';
import BlockIcon from '@material-ui/icons/Block';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';

const MoreInfoPopup = () => {
    return (<List component="nav"  >
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BlockIcon />
            </ListItemIcon>
            <ListItemText primary="Block" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <VolumeMuteIcon />
            </ListItemIcon>
            <ListItemText primary="Mute Group" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DeleteForeverIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Chat" />
        </ListItem>
    </List>);
}

export default MoreInfoPopup;