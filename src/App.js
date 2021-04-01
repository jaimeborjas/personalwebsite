import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Home/>
    </Router>
  );
}

export default App;
