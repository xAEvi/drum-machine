import React from "react";
import '../stylesheets/DrumPad.css'
import { useState } from "react";

const DrumPad = ({ id, keybind, audio, handleScreen, playAudio }) => {

    const [active, setActive] = useState(false);

    const activeButton = () => {
        setActive(true);
        setTimeout(() => setActive(false), 100);
    }

    return (
        <div 
            className={`drum-pad ${active ? 'active' : ''}`}
            id={id}
            onClick={() => {
                playAudio(audio);
                handleScreen(id);
                activeButton();
            }}>
            {keybind}
            <audio 
                id={keybind} 
                className="clip" 
                src={audio}>
            </audio>
        </div>
    );
};

export default DrumPad;