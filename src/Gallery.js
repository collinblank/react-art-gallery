const Gallery = (props) => {
    
    return(
        <div style={{width: '50%'}}>
        <h1>{props.title}</h1>
        <img src={props.objectImg}/>
        <p>{props.artist}</p>
        <p>You're on picture {props.objectId} of 471,581.</p>
        </div>
    )
}

export default Gallery