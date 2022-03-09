const Input = ({ setColor }) => {
    const handleChange = (e)=>{
       const desc = e.target.value;
        setColor(desc);
    }
    return (
        <div className="input">
            <input onChange={(e)=> handleChange(e)} placeholder="Type Color" type="text"></input>
        </div>
      );
}
 
export default Input;