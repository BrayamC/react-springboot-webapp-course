import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">  
              <Switch >   
                <Route path = "/" component = {ListEmployeeComponent}></Route>
                <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
