import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import DiscoverMoviesPage from './pages/DiscoverMoviesPage';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

