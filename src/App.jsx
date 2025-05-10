import './App.css';
import { Otpgenerator } from './components/Otpgenerator';
import { AutomaticOtpGenerator } from './components/AutomaticOtpGenerator';
import { Trafficlight } from './components/Trafficlight';
import Todolist from './components/Todolist';
import { Counter } from './components/Counter';
import { Accordion } from './components/Accordion';

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item"><Otpgenerator /></div>
      <div className="grid-item"><AutomaticOtpGenerator /></div>
      <div className="grid-item"><Accordion /></div>
      <div className="grid-item"><Counter /></div>
      <div className="grid-item"><Todolist /></div>
      <div className="grid-item"><Trafficlight /></div>
    </div>
  );
}

export default App;
