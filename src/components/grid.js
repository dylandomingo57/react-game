import Snake from "./snake";

const Grid = (props) => {
    
    const [grid, updateGrid] = useState([0][0])
    const [snakePosition, setSnakePosition] = useState([0][0])

    return (
        <div className="grid">
            <Snake></Snake>
        </div>
    )
}

export default Grid;