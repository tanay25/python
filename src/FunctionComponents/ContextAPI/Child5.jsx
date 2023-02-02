import React from 'react'
import { Name,Dsg,Salary,City } from './Parent'
export default function Child5() {
    return (
        <>
            <h1>This is Child5 Component</h1>
            <Name.Consumer>
                {
                    (name)=>{
                        return <h3>Name = {name}</h3>
                    }
                }
            </Name.Consumer>
            <Dsg.Consumer>
                {
                    (dsg)=>{
                        return <h3>Designation = {dsg}</h3>
                    }
                }
            </Dsg.Consumer>
            <Salary.Consumer>
                {
                    (salary)=>{
                        return <h3>Salary = {salary}</h3>
                    }
                }
            </Salary.Consumer>
            <City.Consumer>
                {
                    (city)=>{
                        return <h3>City = {city}</h3>
                    }
                }
            </City.Consumer>
        </>
    )
}
