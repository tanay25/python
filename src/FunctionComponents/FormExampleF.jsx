import React, { useState } from 'react'
import "../assets/css/mystyle.css"
export default function FormExampleF() {
    var [employee, setemployee] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setemployee(olddata=>{
            return{
                ...olddata,
                [name]:value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        console.log(`Name = ${employee.name}\nEmail = ${employee.email}\nPhone = ${employee.phone}\nCity = ${employee.city}\nState = ${employee.state}`)
    }
    return (
        <>
            <div className='main'>
                <div className='item'>
                    <h1>Functional Form Component</h1>
                    <form>
                        <input type="text" onChange={getData} name="name" placeholder="Enter your Name"></input>
                        <input type="email" onChange={getData} name="email" placeholder="Enter Email Id"></input>
                        <input type="text" onChange={getData} name="phone" placeholder="Enter your Phone Number"></input>
                        <input type="text" onChange={getData} name="city" placeholder="Enter your City Name"></input>
                        <input type="text" onChange={getData} name="state" placeholder="Enter your State Name"></input>
                        <button type='submit' onClick={postData}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}



// import React, { useState } from 'react'
// import "../assets/css/mystyle.css"
// export default function FormExampleF() {
//     var [employee, setemployee] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         city: "",
//         state: "",
//     })
//     function getData(e) {
//         var name = e.target.name
//         var value = e.target.value
//         if (name == "name") {
//             setemployee({
//                 name: value,
//                 email: employee.email,
//                 phone: employee.phone,
//                 city: employee.city,
//                 state: employee.state,
//             })
//         }
//         else if (name == "email") {
//             setemployee({
//                 email: value,
//                 name: employee.name,
//                 phone: employee.phone,
//                 city: employee.city,
//                 state: employee.state,
//             })
//         }
//         else if (name == "phone") {
//             setemployee({
//                 phone: value,
//                 name: employee.name,
//                 email: employee.email,
//                 city: employee.city,
//                 state: employee.state,
//             })
//         }
//         else if (name == "city") {
//             setemployee({
//                 city: value,
//                 name: employee.name,
//                 phone: employee.phone,
//                 email: employee.email,
//                 state: employee.state,
//             })
//         }
//         else {
//             setemployee({
//                 state: value,
//                 name: employee.name,
//                 phone: employee.phone,
//                 city: employee.city,
//                 email: employee.email,
//             })
//         }
//     }
//     function postData(e) {
//         alert(`Name = ${employee.name}\nEmail = ${employee.email}\nPhone = ${employee.phone}\nCity = ${employee.city}\nState = ${employee.state}`)
//     }
//     return (
//         <>
//             <div className='main'>
//                 <div className='item'>
//                     <h1>Functional Form Component</h1>
//                     <form>
//                         <input type="text" onChange={getData} name="name" placeholder="Enter your Name"></input>
//                         <input type="email" onChange={getData} name="email" placeholder="Enter Email Id"></input>
//                         <input type="text" onChange={getData} name="phone" placeholder="Enter your Phone Number"></input>
//                         <input type="text" onChange={getData} name="city" placeholder="Enter your City Name"></input>
//                         <input type="text" onChange={getData} name="state" placeholder="Enter your State Name"></input>
//                         <button type='submit' onClick={postData}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }
