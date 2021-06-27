import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import {} from 'react-bootstrap'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Search} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

