import SidebarPopper from "./sidebarPopper";
import React from "react";
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  Paper,
  Popover,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
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
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  parentGrid: {
    flex: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  popper: {
    zIndex: 1000,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
    paper: {
      maxWidth: 400,
      overflow: "auto",
    },
  },
}));

export default function SideBar(props) {
  // const theme = useTheme();
  const discoverRef = React.useRef(null);
  const feedRef = React.useRef(null);
  const libRef = React.useRef(null);
  const spaceRef = React.useRef(null);
  const pathRef = React.useRef(null);
  const bcastRef = React.useRef(null);
  const lgRef = React.useRef(null);
  const myAcctRef = React.useRef(null);
  const [currentRef, setCurrentRef] = React.useState({});
  const [popperTitle, setPopperTitle] = React.useState("");
  const [popperContent, setPopperContent] = React.useState("");
  const open = props.open != null ? props.open : false;
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const classes = useStyles();

  const [arrow, setArrow] = React.useState(true);

  const handleDrawerClose = () => {
    props.setOpenDrawer(false);
  };

  const handleMouseBlur = (event, control) => {
    switch (control) {
      case "discover":
        setPopperTitle("Discover");
        setPopperContent(
          "Search like a Superstar with the multidimensional search sets Powered by search strings."
        );
        setCurrentRef(discoverRef);
        break;
      case "feed":
        setPopperTitle("Topics Feed");
        setPopperContent(
          "Buyild y our personal feed out content sourced from verified creators."
        );
        setCurrentRef(feedRef);
        break;
      case "lib":
        setPopperTitle("Library");
        setPopperContent(
          "Organise your resources with an easy retrieval process so you can stay on top of things."
        );
        setCurrentRef(libRef);
        break;
      case "space":
        setPopperTitle("Learning Spaces");
        setPopperContent(
          "Create intuitive larning experiences with easy elements to learn efficiently."
        );
        setCurrentRef(spaceRef);
        break;
      case "path":
        setPopperTitle("Discover");
        setPopperContent(
          "Search like a Superstar with the multidimensional search sets Powered by search strings."
        );
        setCurrentRef(pathRef);
        break;
      case "bcast":
        setPopperTitle("Broadcast");
        setPopperContent(
          "React out ro your audience and Stay connected by going live or uploading content."
        );
        setCurrentRef(bcastRef);
        break;
      case "lg":
        setPopperTitle("Learning Groups");
        setPopperContent("Find like minded learners and join the community.");
        setCurrentRef(lgRef);
        break;
      case "myacct":
        setPopperTitle("My Account");
        setPopperContent("Let's get you ready to learn.");
        setCurrentRef(myAcctRef);
        break;

      default:
        break;
    }
    setPopoverOpen(true);
  };

  return (
    <div className={classes.root}>
      <SidebarPopper
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        arrow={arrow}
        handleClick={handleMouseBlur}
        anchorRef={currentRef}
        title={popperTitle}
        content={popperContent}
      />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Grid
          className={classes.parentGrid}
          container
          direction="column"
          justify="space-between"
        >
          <Grid item>
            <Toolbar
              variant="dense"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton onClick={handleDrawerClose}>
                {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </Toolbar>
            <Divider />
            <List>
              <ListItem button key={"Home"} component={Link} to="/home">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCertificate} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListItem button key={"Discover"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "discover")}
                  ref={discoverRef}
                >
                  <FontAwesomeIcon icon={faGalacticRepublic} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Discover"} />
              </ListItem>

              <ListItem button key={"Feed"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "feed")}
                  ref={feedRef}
                >
                  <FontAwesomeIcon icon={faLayerGroup} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Feed"} />
              </ListItem>
              <ListItem button key={"Library"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "lib")}
                  ref={libRef}
                >
                  <FontAwesomeIcon icon={faBookmark} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Library"} />
              </ListItem>
              <ListItem button key={"Spaces"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "space")}
                  ref={spaceRef}
                >
                  <FontAwesomeIcon icon={faNewspaper} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Spaces"} />
              </ListItem>
              <ListItem button key={"Paths"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "path")}
                  ref={pathRef}
                >
                  <FontAwesomeIcon icon={faPaperPlane} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Paths"} />
              </ListItem>
              <ListItem button key={"Broadcasts"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "bcast")}
                  ref={bcastRef}
                >
                  <FontAwesomeIcon icon={faVideo} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Broadcasts"} />
              </ListItem>
              <ListItem button key={"Learning Groups"}>
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "lg")}
                  ref={lgRef}
                >
                  <FontAwesomeIcon icon={faUsers} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Learning Groups"} />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListItem
                button
                key={"Profile"}
                component={Link}
                to="/profile/settings"
              >
                <ListItemIcon
                  onMouseEnter={(e) => handleMouseBlur(e, "myacct")}
                  ref={myAcctRef}
                >
                  <FontAwesomeIcon icon={faUserCircle} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary="My Account"></ListItemText>
              </ListItem>
              <ListItem
                button
                key={"Settings"}
                component={Link}
                to="/myProfile/editProfile"
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCog} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary="Settings"></ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
