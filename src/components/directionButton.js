import { useState } from "react";
import '../DirectionButton.css';


const DirectionButton = (props) => {


    return(
        <button class="directionButton">
            {props.text}
        </button>
    )
}

export default DirectionButton;