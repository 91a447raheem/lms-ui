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
import Participants from "./components/Connect/participants";
import MessageConnect from "./components/Connect/messageConnect"

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
        <Route exact path="/connect/allparticipants" component={Participants} />
        <Route exact path="/connect/messages" component={MessageConnect} />
        <Route exact path="/connect/messages/grpChat" component={MessageConnect} />
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


      </Router>
    </div>

  );
}

export default App;
