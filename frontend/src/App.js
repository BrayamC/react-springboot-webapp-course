import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">  
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
