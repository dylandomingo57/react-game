import { useState } from "react";

const Button = (props) => {
    return (
        <button class="btn" /*onClick={props.onButtonClick}*/>
            {props.text}
        </button>
    )
}

export default Button;