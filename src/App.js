import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import SignIn from './components/Screens/SignIn/SignIn';
import SignUp from './components/Screens/SignUp/SignUp';
import OrganizationSignIn from './components/Screens/OrganizationSignIn/OrganizationSignIn';
import OrganizationSignUp from './components/Screens/OrganizationSignUp/OrganizationSignUp';
import CreatePoll from './components/Screens/CreatePoll/CreatePoll';
import AllOrganizationPolls from './components/Screens/AllOrganizationPolls/AllOrganizationPolls';
import AllPersonalPolls from './components/Screens/AllPersonalPolls/AllPersonalPolls';
import SubscribedOrganizationPolls from './components/Screens/SubscribedOrganizationPolls/SubscribedOrganizationPolls';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/organizationsignin" component={OrganizationSignIn} />
        <Route path="/organizationsignup" component={OrganizationSignUp} />
        <Route path="/createpoll" component={CreatePoll} />
        <Route path="/allorganizationpolls" component={AllOrganizationPolls} />
        <Route path="/allpersonalpolls" component={AllPersonalPolls} />
        <Route path="/subscribedorganizationpolls" component={SubscribedOrganizationPolls} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
