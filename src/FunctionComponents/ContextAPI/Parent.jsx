import React,{createContext} from 'react'
import Child1 from './Child1'

var Name = createContext()
var Dsg = createContext()
var Salary = createContext()
var City = createContext()
export default function Parent() {
    return (
        <>
            <h1>This is Parent Component</h1>
            <hr/>
            <Name.Provider value="Nitin Chauhan">
                <Dsg.Provider value='Trainer'>
                    <Salary.Provider value={50000}>
                        <City.Provider value={"Noida"}>
                            <Child1/>
                        </City.Provider>
                    </Salary.Provider>
                </Dsg.Provider>
            </Name.Provider>
        </>
    )
}
export {Name,Dsg,Salary,City}