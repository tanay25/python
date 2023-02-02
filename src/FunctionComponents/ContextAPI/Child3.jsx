import React,{useContext} from 'react'
import Child4 from './Child4'
import { Name,Dsg,City,Salary } from './Parent'
export default function Child3() {
    var name = useContext(Name)
    var dsg = useContext(Dsg)
    var salary = useContext(Salary)
    var city = useContext(City)
    return (
        <>
            <h1>This is Child3 Component</h1>
            <h3>Name : {name}</h3>
            <h3>Designation : {dsg}</h3>
            <h3>Salary : {salary}</h3>
            <h3>City : {city}</h3>
            <hr/>
            <Child4/>
        </>
    )
}
