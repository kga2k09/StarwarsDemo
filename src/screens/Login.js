import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state ={
            uname:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            uname: event.target.value
        })
    }

    handlePwdChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.uname + ":pwd" + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="logincontent">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="username" onChange={this.handleChange} />
                    </div>    
                    <div>
                        <input type="password" placeholder="password" onChange={this.handlePwdChange} />
                    </div>   
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Login;