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

  const playAudio = audio => {
    new Audio(audio).play();
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
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'}
          /> 

          <DrumPad 
            keybind="W"
            id="Heater 2"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'}
          /> 

          <DrumPad 
            keybind="E"
            id="Heater 3"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'}
          /> 

          <DrumPad 
            keybind="A"
            id="Heater 4"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'}
          /> 

          <DrumPad 
            keybind="S"
            id="Clap"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'}
          /> 

          <DrumPad 
            keybind="D"
            id="Open HH"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'}
          /> 

          <DrumPad 
            keybind="Z"
            id="Kick n' Hat"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'}
          /> 

          <DrumPad 
            keybind="X"
            id="Kick"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'}
          /> 

          <DrumPad 
            keybind="C"
            id="Closed HH"
            handleScreen={handleScreen}
            playAudio={playAudio}
            audio={'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
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
