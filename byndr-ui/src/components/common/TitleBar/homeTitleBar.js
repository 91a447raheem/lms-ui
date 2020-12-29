import {
  Button,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
// import Typography from '@material-ui/core/Typography';
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useClasses = makeStyles((theme) => ({
  rightSpace: {
    marginRight: theme.spacing(2),
  },
}));

export default function HomeTitleBar(props) {
  const classes = useClasses();
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
        <Button
          component={Link}
          to="/Home"
          color="inherit"
          className={classes.rightSpace}
        >
          Home
        </Button>
        <TextField
          placeholder="Search for Anything"
          variant="standard"
          color="primary"
        ></TextField>
      </Toolbar>
    </AppBar>
  );
}
