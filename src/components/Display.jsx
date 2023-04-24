import React from "react";
import '../stylesheets/Display.css'

const Display = props => {
    return(
        <div id="display-screen">
            <h3>
                {props.drum}
            </h3>
        </div>
    );
};

export default Display;