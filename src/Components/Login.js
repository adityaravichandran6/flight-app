import React, {Component} from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password',
        }
        this.toggleVis = this.toggleVis.bind(this);
    }

    toggleVis(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type==='input'?'password':'input',
        });
    }

    render() {
        return (
            <div class='container'>
              <form id='login'>
                <h1>Login</h1>
                <input type='text' placeholder='username/email' />
                <input type={this.state.type} placeholder='password' />
                <span onClick={this.toggleVis}>{this.state.type==='input'?'Hide':'Show'}</span>
                <input type='submit' value='Log in' />
              </form>
              <button onClick={this.props.onClick}>Sign up instead?</button>
            </div>
        );
    }
}

export default Login;