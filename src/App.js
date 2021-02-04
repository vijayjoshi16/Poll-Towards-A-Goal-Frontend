import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import SignIn from './components/Screens/SignIn/SignIn';
import SignUp from './components/Screens/SignUp/SignUp';
import OrganizationSignIn from './components/Screens/OrganizationSignIn/OrganizationSignIn';
import OrganizationSignUp from './components/Screens/OrganizationSignUp/OrganizationSignUp';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
