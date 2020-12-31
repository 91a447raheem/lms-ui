import { Button, IconButton, Toolbar } from "@material-ui/core";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
// import Typography from '@material-ui/core/Typography';
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function ProfileTitleBar(props) {
  return (
    <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}
    >
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(props.classes.menuButton, {
            [props.classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Button component={Link} to="/profile/settings" color="inherit">
          Profile Settings
        </Button>
        <Button component={Link} to="/profile/security" color="inherit">
          Sign In & Security
        </Button>
        <Button component={Link} to="/profile/privacy" color="inherit">
          Privacy
        </Button>
        <Button component={Link} to="/profile/notifications" color="inherit">
          Notification Settings
        </Button>
      </Toolbar>
    </AppBar>
  );
}
