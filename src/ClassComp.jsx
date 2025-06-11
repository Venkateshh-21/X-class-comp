import React ,{Component} from "react";

class Counter extends Component{
    constructor(props){
      super(props)
      this.state = {
        count:0
      }
    }
     
    increement = () => {
        this.setState((prevState)=>({
            count:prevState.count + 1
        }))
    }
    decreement=()=>{
        this.setState((prevState)=>({
            count:prevState.count -1
        }))
    }

    render(){
        return <div>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increement}>Increment</button>
            <button onClick={this.decreement}>Decrement</button>
        </div>
    }
}
export default Counter