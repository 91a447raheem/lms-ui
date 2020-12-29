import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileTitleBar from "./profileTitleBar";
import { useLocation } from "react-router-dom";
import HomeTitleBar from "./homeTitleBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function TitleBar(props) {
  const open = props.open != null ? props.open : false;
  const classes = useStyles();
  const handleDrawerOpen = () => {
    props.setOpenDrawer(true);
  };

  const location = useLocation();
  console.log(location.pathname);

  const currentTitleBar =
    location.pathname.toLowerCase().indexOf("/profile") !== -1 ? (
      <ProfileTitleBar
        open={open}
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
      />
    ) : location.pathname.toLowerCase().indexOf("/home") !== -1 ? (
      <HomeTitleBar
        open={open}
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
      />
    ) : (
      <div />
    );

  return currentTitleBar;
}
