import React,{useState} from 'react'
export default function StateExamnpleF() {
    var [num,setnum]=useState(1)
    function increment(){
        setnum(++num)
    }
    function decrement(){
        if(num>1){
            setnum(--num)
        }
    }
    return (
        <>
            <h1>Fuctional State Example</h1>
            <h3>num = {num}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
