const Block = (props) => {
    return ( 
        <div style={{"backgroundColor" : props.style}} className="block">
            <h2>{props.style === " " ? "Empty Value" : props.style }</h2>
        </div>
     );
}
 
export default Block;