import React from "react";
import SideBar from "./sidebar";
import { makeStyles } from "@material-ui/core/styles";
import TitleBar from "./TitleBar/titleBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/home";
import NotificationSettings from "../Profile/NotificationSettings/notificationSettings";
import Settings from "../Profile/Settings/settings";
import Privacy from "../Profile/Privacy/privacy";
import Security from "../Profile/Security/security";

const useStyles = makeStyles((theme) => ({
  marginSmall: {
    marginRight: 12,
  },
  marginLarge: {
    marginRight: 36,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // content_mTop: {
  //   marginTop: 40,
  // },
}));

export default function Shell(props) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawer = (value) => {
    setOpenDrawer(value);
  };
  const classes = useStyles();
  return (
    <div>
      <SideBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <TitleBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <main
        className={classes.content}
        style={{ marginLeft: openDrawer === true ? 232 : 56 }}
      >
        <div className={classes.content_mTop} />
        {props.content}
        <Router>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile/settings" component={Settings} />
          <Route
            exact
            path="/profile/notifications"
            component={NotificationSettings}
          />
          <Route exact path="/profile/privacy" component={Privacy} />
          <Route exact path="/profile/security" component={Security} />
        </Router>
      </main>
    </div>
  );
}
