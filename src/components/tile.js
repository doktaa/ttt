const Tile = (props) => {
    let hoverColour = ""
    switch(props.turn) {
        case 'O':
            hoverColour = ' hover:bg-violet-400 transition-colors duration-300'
            break;
        case 'X':
            hoverColour = ' hover:bg-red-600 transition-colors duration-300'
            break;
    }
    return (
        <div id={props.num} className={"tile" + hoverColour} onClick={() => {props.click(props.num)}}>
        </div>
    )
}

export default Tile