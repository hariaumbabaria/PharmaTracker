import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import {} from 'react-bootstrap'
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
       {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;

