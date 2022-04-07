import logo from './logo.svg';
import './App.css';
import JoinUs from './components/JoinUs';
import Setting from './components/Settings';
import LogIn from "./components/LogIn";
import ContactUs from "./components/ContactUs";
import Search from './components/Search';
import Help from "./components/Help";
import Home from "./components/Home";
import Download from "./components/download"

function App() {
  return (
    <div className="App">
      <div id='c1'>
        <JoinUs/>
      </div>
      <div id='c2'>
        <Setting/>
      </div>
      <div id='c3'>
        <LogIn/>
      </div>
      <div id='c4'>
        <ContactUs/>
      </div>
      <div id='c5'>
        <Search/>
      </div>
      <div id='c6'>
        <Help/>
      </div>
      <div id='c7'>
        <Home/>
      </div>
      <div id='c8'>
        <Download/>
      </div>
    </div>
  );
}

export default App;
