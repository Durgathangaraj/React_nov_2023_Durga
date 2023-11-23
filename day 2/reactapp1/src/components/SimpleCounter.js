import {useState} from "react";
function SimpleCounter() {
    
    const[num,setNum]=useState("0");
   
    const numHandler = ()=> {
        let value=num;
        setNum(++value);
        setNum(--value);
    };
    const nmHandler = ()=> {
        let value=num;
        
        setNum(--value);
    };
    return(
        <div>
            
            <hr></hr>
           
            <h2>Number : {num}</h2>
           
            
            <button onClick={numHandler}>Increment Number</button><br></br>
            <button onClick={numHandler}>Decrement Number</button><br></br>
        </div>
    );
}
export default SimpleCounter;