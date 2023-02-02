import React,{Component} from "react";

export default class StateExample extends Component{
    constructor(){
        super()
        this.state={
            num:1
        }
    }
    increment(){
        this.setState({num:this.state.num+1})
    }
    decrement(){
        if(this.state.num>1){
            this.setState({num:this.state.num-1})
        }
    }
    render(){
        return(
            <>
                <h1>Class Component Example</h1>
                <h3>num = {this.state.num}</h3>
                <button onClick={()=>this.increment()}>Incremet</button>
                <button onClick={()=>this.decrement()}>Decremet</button>
            </>
        ) 
    }
}