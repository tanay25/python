import React from "react";

export default function LiftingStateUPF(props){
    return(
        <>
            <h1>This is Functional Component</h1>
            <button onClick={()=>props.getData("Mohit Sharma")}>Click ME!!!!</button>
        </>
    )
}