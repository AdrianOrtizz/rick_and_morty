import React from "react";

function RandomButton(props){
    return (
        <div>
            <button onClick={props.randomCharacter}>Random</button>
        </div>
    )
}

export default RandomButton;