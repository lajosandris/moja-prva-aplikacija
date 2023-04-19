import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
 

//import Osoba from './utilities/Person';
//import { sum, pi, imeAplikacije as mojaVarijabla, num1 as broj1, num2 as broj2 } from './Utility';

// 5.5
import { Komponenta1 } from'./Komponenta1';
import { Komponenta2 } from './Komponenta2';
import Komponenta3 from './Komponenta3';


var prva = "prvi-text";
var druga = "drugi-text";


function App() {
  
  ////////
  //5.5
 
  //return (<Komponenta1/>);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
        llllllll
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
      <Komponenta1/>
      <Komponenta2 podatak1={prva}/>
      <Komponenta3 podatak1={prva} podatak2={druga}/>
    </div>
  );
}

export default App;
