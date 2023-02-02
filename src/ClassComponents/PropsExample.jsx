import React, { Component } from 'react'

export default class PropsExample extends Component {
  render() {
    return (
      <>
            <h1>Class Component Props Example</h1>
            <h3>Name :  {this.props.name}</h3>
            <h4>Salary : {this.props.salary}</h4>
      </>
    )
  }
}
