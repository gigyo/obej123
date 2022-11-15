import logo from './logo.svg';
import './App.css';
import Componenta from './components/component_a';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Componenta name="Gise" />
        </p>
       
    </div>
  );
}

export default App;
