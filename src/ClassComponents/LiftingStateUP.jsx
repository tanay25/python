import React,{Component} from "react";

export default class LiftingStateUP extends Component{
    render(){
        return(
            <>
                <h1>This is Class Component</h1>
                <button onClick={()=>this.props.getData("Nitin Chauhan")}>Click Me!!!</button>
            </>
        )
    }
}