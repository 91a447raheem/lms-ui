import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/SSO/welcome';
import Signup from './components/SSO/signup';
import Login from './components/SSO/login';
import Forgotpassword from './components/SSO/forgotpassword';
import Passwordreset from './components/SSO/passwordreset';
import Checkemail from './components/SSO/checkemail';
import Passwordchangeconfirm from './components/SSO/passwordchangeconfirm';
import HomeScreen from './components/Home/homescreen';
import Shell from "./components/common/shell";
import Myprofile from "./components/Myprofile/Myprofile";
import MessageConnect from "./components/Connect/messageConnect";
import Videoconfrence from './components/Connect/videoconfrence';
import broadcastHome from "./components/Broadcast/broadcast-home";
import Mybroadcast from "./components/Broadcast/mybroadcast";
import Playlist from "./components/Broadcast/playlist";
import PlaylistByID from "./components/Broadcast/playlistByID";
import Startbroadcast from "./components/Broadcast/startbroadcast";
import Uplloadvideo from "./components/Broadcast/uploadvideo";
import Videoplay from "./components/Broadcast/videoplay";



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={Forgotpassword} />
        <Route exact path="/passwordreset" component={Passwordreset} />
        <Route exact path="/checkemail" component={Checkemail} />
        <Route exact path="/homescreen" component={HomeScreen} />
        <Route exact path="/confirmpasswordchange" component={Passwordchangeconfirm} />
        <Route exact path="/connect/allparticipants" component={MessageConnect} />
        <Route exact path="/connect/messages" component={MessageConnect} />
        <Route exact path="/connect/sharedfiles" component={MessageConnect} />
        <Route exact path="/connect/sharedcontent" component={MessageConnect} />
        <Route exact path="/connect/sharedcontentsingle" component={MessageConnect} />
        <Route exact path="/connect/messages/grpChat" component={MessageConnect} />
        <Route exact path="/connect/videochat" component={Videoconfrence} />
        <Route exact path="/connect/messages/grpChatInfo" component={MessageConnect} />
        <Route exact path="/connect/messages/grpChatVoice" component={MessageConnect} />
        <Route exact path="/connect/messages/grpChatVideo" component={MessageConnect} />
        <Route exact path="/connect/messages/userChat" component={MessageConnect} />
        <Route exact path="/home" component={Shell} />

        <Route exact path="/profile/settings" component={Shell} />
        <Route exact path="/profile/notifications" component={Shell} />
        <Route exact path="/profile/privacy" component={Shell} />
        <Route exact path="/profile/security" component={Shell} />


        <Route exact path="/myProfile" component={Myprofile} />
        <Route exact path="/myProfile/editProfile" component={Myprofile} />
        <Route exact path="/myProfile/myPath" component={Myprofile} />
        <Route exact path="/myProfile/spaces" component={Myprofile} />
        <Route exact path="/myProfile/people" component={Myprofile} />
        <Route exact path="/myProfile/people/request" component={Myprofile} />

        <Route exact path="/broadcast" component={broadcastHome} />
        <Route exact path="/broadcast/explorebroadcast" component={broadcastHome} />
        <Route exact path="/broadcast/mybroadcast"  component={Mybroadcast} />
        <Route exact path="/broadcast/myplaylists" component={Playlist} />
        <Route exact path="/broadcast/myplaylists/:id"  component={PlaylistByID}/>
        <Route exact path="/broadcast/startbroadcast" component={Startbroadcast} />
        <Route exact path="/broadcast/uploadvideo" component={Uplloadvideo} />

        <Route exact path="/broadcast/explorebroadcast/:vid"  component={Videoplay}/>
        <Route exact path="/broadcast/mybroadcast/:vid"  component={Videoplay} />
        <Route exact path="/broadcast/startbroadcast/:vid" component={Videoplay} />
        <Route exact path="/broadcast/uploadvideo/:vid" component={Videoplay} />
        <Route exact path="/broadcast/myplaylists/:id/:vid"  component={Videoplay}/>






      </Router>
    </div>

  );
}

export default App;
