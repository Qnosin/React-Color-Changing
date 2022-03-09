import Block from "./Block";
import { useState } from "react";
import Input from "./Input";

function App() {
  const [color,setColor] = useState(" ");
  return (
    <div className="App">
        <div className="content">
            <Block style={color}></Block>
            <Input setColor={setColor} ></Input>
        </div>
    </div>
  );
}

export default App;
