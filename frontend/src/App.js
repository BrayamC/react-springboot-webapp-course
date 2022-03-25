import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">  
              <Switch >   
                <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                <Route path = "/employees" exact component = {ListEmployeeComponent}></Route>
                <Route path = "/add-employee" exact component = {CreateEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
