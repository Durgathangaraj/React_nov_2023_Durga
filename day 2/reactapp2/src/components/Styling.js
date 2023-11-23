const Inlinestyle = () =>
{

 const pstyle={
    backgroundColor: "lightblue",
    color: "darkblue",
    padding:"10px",
    Borderstyle:"1px solid blue",
    BorderRadius:"5px",
 }
 return(
    <div style={pstyle}>
        <h1 style={{color:"green"}}>Inline Style in JSX Example.</h1>
        <p style={{color:"darkblue",fontSize:"16px"}}>This is a paragraph with inline styles applied.</p>
    </div>
 );

}

export default Inlinestyle;