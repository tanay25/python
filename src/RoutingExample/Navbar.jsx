import React from 'react'
import {NavLink} from 'react-router-dom'
import "./mystyle.css"
export default function () {
    return (
        <>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/profile/Unknown/0'>Profile</NavLink></li>
                <li><NavLink to='/contact'>Contact US</NavLink></li>
            </ul>
        </>
    )
}
