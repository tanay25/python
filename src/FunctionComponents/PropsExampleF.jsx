import React from 'react'
export default function PropsExampleF(props) {
  return (
    <>
        <h1>Functional Component Props Example</h1>
        <h3>Name :  {props.name}</h3>
        <h4>Salary : {props.salary}</h4>
    </>
  )
}
