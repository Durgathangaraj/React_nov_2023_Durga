import React,{Component} from "react";
class Lifecycle extends Component{
 //Mounting phase
 constructor(props)
 {
    super(props);
    console.log("1. constructor called");
    this.state={ data: null};
 }
 static getDerivedStateFromProps(nextProps, nextState)
 {
  console.log("2. getDerivedStateFromProps called");
  return null;
 }
 componentDidMount()
 {
  console.log("3. componentDidMount called");
  this.setState({data: "Hello, World!"});
 }
 shouldComponentUpdate(nextProps, nextState)
 {
  console.log("4. shouldComponentUpdate called");
  return true;
 }
 getSnapshotBeforeUpdate(prevProps, prevState)
 {
  console.log("5. getSnapshotBeforeUpdate called");
  return null;
 }
 componentDidUpdate(prevProps,prevState,snapshot)
 {
  console.log("6. componentDidUpdate called");
  //Perform actions after the component updates.
 }
 //Unmounting Phase
 componentWillUnmount()
 {
  console.log("7. componentWillUnmount called");
  //Perform cleanup before the component is unmounted.
 }
 render()
 {
  console.log("8. Render called");
  return(
    <div>
        <h1>Component Lifecycle Example</h1>
        <p>{this.state.data}</p>
    </div>
  );
 }
}
export default Lifecycle;