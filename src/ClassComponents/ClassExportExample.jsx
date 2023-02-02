import React,{Component} from "react";

export var name="Tanay Mishra"
export var arr = [10,20,30,40,50,60,70,80,90,100]
export var emp={
    id:1001,
    name:"Tanay Mishra",
    dsg:"Python Consultant"
}
export function display(){
    return(
        <h3>in display function of ClassComponents</h3>
    )
}
export default class ClassExportExample extends Component{
    render(){
        return(
            <h1>This is Export Import Example of Class Component</h1>
        )
    }
}
// export {name,arr,emp,display} 