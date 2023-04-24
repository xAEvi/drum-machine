import './App.css';
import DrumPad from './components/DrumPad';
import Display from './components/Display'
import { useState, useEffect } from 'react';

function App() {

  const [drum, setDrum] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  })

  const handleScreen = text => {
    setDrum(text);
  }

  const handleKeyDown = e => {
    const key = e.key.toUpperCase();
    const drumPad = document.getElementById(key);
    if (drumPad) {
      drumPad.click();
    }
  };

  return (
    <div className="App">
      <div id='drum-machine'>
        <div id='pads-container'>
          <DrumPad 
            keybind="Q"
            id="Heater 1"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="W"
            id="Heater 2"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="E"
            id="Heater 3"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="A"
            id="Heater 4"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="S"
            id="Clap"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="D"
            id="Open HH"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="Z"
            id="Kick n' Hat"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="X"
            id="Kick"
            handleScreen={handleScreen}
          /> 

          <DrumPad 
            keybind="C"
            id="Closed HH"
            handleScreen={handleScreen}
          /> 
        </div>
        <div className='display'>
          <Display
            drum={drum}>
          </Display>
        </div>
      </div>
    </div>
  );
}

export default App;
