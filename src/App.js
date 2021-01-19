import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
