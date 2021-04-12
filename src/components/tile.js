const Tile = (props) => {
    return (
        <div id={props.num} onClick={() => {props.click(props.num)}}>
            harro
        </div>
    )
}

export default Tile