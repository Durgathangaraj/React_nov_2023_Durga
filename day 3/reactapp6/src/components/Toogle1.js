import React,{useState} from "react";
function Toogle1()
{
    const[showMessage,setshowMessage]=useState(false);
    const toogleMessage=()=>{
        setshowMessage(!showMessage)
    };
    return(
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={toogleMessage}>{showMessage ?"Hide Message":"show Message"}</button>
            {showMessage && <p> Hi How are you!!!</p>}
        </div>
    );
}
export default Toogle1;