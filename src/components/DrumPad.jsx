import React from "react";
import '../stylesheets/DrumPad.css'
import { useState } from "react";

const DrumPad = props => {

    const [active, setActive] = useState(false);

    return (
        <div 
            className={`drum-pad ${active ? 'active' : ''}`}
            id={props.id}
            onClick={
                () => 
                {props.handleScreen(props.id);
                setActive(true);
                setTimeout(() => setActive(false), 100);
                }}>
            {props.keybind}
            <audio 
                id={props.keybind} 
                className="clip" 
                src={props.audio}>
            </audio>
        </div>
    );
};

export default DrumPad;