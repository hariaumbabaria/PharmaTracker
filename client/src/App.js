import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import {} from 'react-bootstrap'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Signup from "./components/Signup";
import Login from './components/Login';
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Update' component={Update} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

