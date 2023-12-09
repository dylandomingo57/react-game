import Snake from "./snake";
import { useState } from "react";

const Grid = (props) => {
    
    const [grid, updateGrid] = useState([0][0])
    const [snakePosition, setSnakePosition] = useState([0][0])

    return (
        <div class="grid">
            <Snake></Snake>
        </div>
    )
}

export default Grid;