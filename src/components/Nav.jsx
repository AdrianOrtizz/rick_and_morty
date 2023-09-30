import React from "react";
import SearchBar from './SearchBar.jsx';
import RandomButton from "./RandomButton.jsx";

export default function Nav(props){
    return(
        <div>
            <RandomButton randomCharacter={props.randomCharacter}/>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}
