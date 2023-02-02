import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
  constructor(){
    super()
    this.state = {
      num:1
    }
  }
  render() {
    console.log("Parent Component is Called");
    return (
      <>
        <h1>Thhis is Parent Component</h1>
        <h4>num : {this.state.num}</h4>
        <button onClick={()=>this.setState({num:this.state.num+1})}>Inc</button>
        <button onClick={()=>this.state.num>1?this.setState({num:this.state.num-1}):""}>Dec</button>
        <hr/>
        <Child/>
      </>
    )
  }
}
