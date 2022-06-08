
const ButtonBar = (props) => {
    return(
    <div>
        <button value={-5} onClick={props.handleIterate}>Way Back</button>
        <button value={-1} onClick={props.handleIterate}>Back</button>
        <button value={1} onClick={props.handleIterate}>Next</button>
        <button value={5} onClick={props.handleIterate}>Way Ahead</button>
    </div>
    )
}

export default ButtonBar