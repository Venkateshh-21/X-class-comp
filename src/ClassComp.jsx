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
            <p>Count : {this.state.count}</p>
            <button onClick={this.increement}>Increement</button>
            <button onClick={this.decreement}> decreeement</button>
        </div>
    }
}
export default Counter