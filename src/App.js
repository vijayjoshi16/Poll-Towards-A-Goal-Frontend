import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import SignIn from './components/Screens/SignIn/SignIn';
import SignUp from './components/Screens/SignUp/SignUp';
import OrganizationSignIn from './components/Screens/OrganizationSignIn/OrganizationSignIn';
import OrganizationSignUp from './components/Screens/OrganizationSignUp/OrganizationSignUp';
import CreatePersonalPoll from './components/Screens/CreatePersonalPoll/CreatePersonalPoll';
import CreateOrganizationPoll from './components/Screens/CreateOrganizationPoll/CreateOrgnizationPoll';
import AllOrganizationPolls from './components/Screens/AllOrganizationPolls/AllOrganizationPolls';
import AllPersonalPolls from './components/Screens/AllPersonalPolls/AllPersonalPolls';
import SubscribedOrganizationPolls from './components/Screens/SubscribedOrganizationPolls/SubscribedOrganizationPolls';
import OrganizationProfile from './components/Screens/OrganizationProfile/OrganizationProfile';

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
        <Route path="/createpersonalpoll" component={CreatePersonalPoll} />
        <Route path="/createorganizationpoll" component={CreateOrganizationPoll} />
        <Route path="/allorganizationpolls" component={AllOrganizationPolls} />
        <Route path="/allpersonalpolls" component={AllPersonalPolls} />
        <Route path="/subscribedorganizationpolls" component={SubscribedOrganizationPolls} /> 
        <Route path="/organizationprofile" component={OrganizationProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
