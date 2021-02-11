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
import OrganizationProfile from './components/Screens/OrganizationProfile/OrganizationProfile';
import OrganizationPoll from './components/Screens/OrganizationPoll/OrganizationPoll';
import PersonalPoll from './components/Screens/PersonalPoll/PersonalPoll';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <div className="screens">
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
        <Route path="/organizationprofile/:id" component={OrganizationProfile} />
        <Route path="/organizationpoll/:id" component={OrganizationPoll} />
        <Route path="/personalpoll/:id" component={PersonalPoll} />
      </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
