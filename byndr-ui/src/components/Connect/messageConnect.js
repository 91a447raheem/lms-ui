import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../common/sidebar";

import Messages from "../Connect/Messages/messages"
import GrpChat from "../Connect/Messages/grpChat"
import GrpChatInfo from "../Connect/Messages/grpChatInfo"
import GrpChatVoice from "../Connect/Messages/grpChatVoicecall"
import GrpChatVideo from "../Connect/Messages/grpChatVideocall"
import UserChatInfo from '../Connect/Messages/userChatInfo'
import Header from '../common/header'
import ChatList from '../Connect/Messages/chatList';
import Participants from "./participants";
import Sharedfiles from "./sharedfiles";
import Sharedcontent from "./sharedcontent";
import Sharedcontentsingle from "./sharedcontentsingle";

const useStyles = makeStyles((theme) => ({
  marginSmall: {
    marginRight: 12,
  },
  marginLarge: {
    marginRight: 36,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3)
  },
  headerBlock: {
    position: 'fixed',
    top: 0,
    zIndex: 999,
    width: 'calc(100% - 64px)'
  },
  midContainer: {
    marginTop: 70,
    width: '100%',
    float: 'right'
  },
  chatListblock: {
    width: '100%',
    float: 'left',
    maxWidth: 375,
    height: '100%',
    overflowY: 'auto',
    // position: 'fixed',
    background: '#fff',
    zIndex: 999,
    [theme.breakpoints.between(700,1030)]: {
      maxWidth: '32%'
   }
  },
  chatListblockinr: {
    marginTop: 10
  },
  contentRenderer: {
    float: 'right',
    width: 'calc(100% - 385px)',
    height: '100%',
    padding: '0 5px',
    [theme.breakpoints.between(700,1030)]: {
      width: 'calc(100% - 34%)'
   }
  },
  contentRendererinr: {
    paddingTop: 10,
    background: "#fff",
    height: '100%'
  }
}));

export default function MessageConnect() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawer = (value) => {
    setOpenDrawer(value);
  };
  const classes = useStyles();
  return (
    <div>
      <SideBar open={openDrawer} setOpenDrawer={handleDrawer} />
      {/* <MyProfileTitleBar open={openDrawer} setOpenDrawer={handleDrawer} /> */}
      <main
        className={classes.content}
        style={{ marginLeft: openDrawer === true ? 232 : 76 }}
      >
        <div className={classes.headerBlock}>
          <Header></Header>
        </div>
        <div className={classes.midContainer}>
          <div className={classes.chatListblock}>
            <div className={classes.chatListblockinr}>
              <ChatList />
            </div>
          </div>
          <div className={classes.contentRenderer}>
            <div className={classes.contentRendererinr}>
              <Router>
                <Route exact path="/connect/allparticipants" component={Participants} />
                <Route exact path="/connect/messages" component={Messages} />
                <Route exact path="/connect/messages/grpChat" component={GrpChat} />
                <Route exact path="/connect/messages/grpChatInfo" component={GrpChatInfo} />
                <Route exact path="/connect/messages/grpChatVoice" component={GrpChatVoice} />
                <Route exact path="/connect/messages/grpChatVideo" component={GrpChatVideo} />
                <Route exact path="/connect/messages/userChat" component={UserChatInfo} />
                <Route exact path="/connect/sharedfiles" component={Sharedfiles} />
                <Route exact path="/connect/sharedcontent" component={Sharedcontent} />
                <Route exact path="/connect/sharedcontentsingle" component={Sharedcontentsingle} />
              </Router>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
