import React,{useState} from 'react'
import Child from './Child'

export default function Parent() {
    var [num,setnum] = useState(1)
  return (
    <>
        {console.log("Parent Component is Called")}
        <h1>This is Parent Component</h1>
        <h4>num = {num}</h4>
        <button onClick={()=>setnum(num+1)}>Inc</button>
        <button onClick={()=>num>1?setnum(num-1):""}>Dec</button>
        <hr/>
        <Child/>
    </>
  )
}
