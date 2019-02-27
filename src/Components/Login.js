import React, {Component} from 'react';
import Dashboard from './Dashboard';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password',
            username: '',
            password: '',
            loggedIn: false,
        }
        this.toggleVis = this.toggleVis.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    toggleVis(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type==='input'?'password':'input',
        });
    }

    authenticate() {
        this.setState({loggedIn: true});
    } 

    render() {
        if(this.state.loggedIn) {
            return(<Dashboard />);
        } else {
            return (
                <div class='container'>
                  <form id='login' onSubmit={this.authenticate}>
                    <h1>Login</h1>
                    <input type='text' value={this.state.username} placeholder='username/email' />
                    <input type={this.state.type} value={this.state.password} placeholder='password' />
                    <span onClick={this.toggleVis}>{this.state.type==='input'?'Hide':'Show'}</span>
                    <input type='submit' value='Log in' />
                    <button onClick={this.props.onClick}>Sign up instead?</button>
                  </form>
                </div>
            );
        }
    }
}

export default Login;