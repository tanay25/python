import React, { Component } from 'react'

export default class InputExample extends Component{
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            dsg: ""
        }
    }
    getData(e) {
        if (e.target.name == "fname")
            this.setState({ fname: e.target.value })
        else if (e.target.name == "lname")
            this.setState({ lname: e.target.value })
        else
            this.setState({ dsg: e.target.value })
    }
    postData(e) {
        if (this.state.fname.length >= 3)
            alert("Full Name : " + this.state.fname + " " + this.state.lname + "\nDesignation : " + this.state.dsg)
    }
    render() {
        return (
            <>
                <h1>Class  Component Example</h1>
                <h4>First Name : {this.state.fname}</h4>
                <h4>Last Name : {this.state.lname}</h4>
                <h4>Designation : {this.state.dsg}</h4>
                <input type="text" onChange={(e) => this.getData(e)} name="fname" placeholder="Enter Your First Name" />
                <br />
                <input type="text" onChange={(e) => this.getData(e)} name="lname" placeholder="Enter Your Last Name" />
                <br />
                <input type="text" onChange={(e) => this.getData(e)} name="dsg" placeholder="Enter Your Designation" />
                <br />
                <button onClick={(e) => this.postData(e)}>Click ME</button>
            </>
        )
    }
}
