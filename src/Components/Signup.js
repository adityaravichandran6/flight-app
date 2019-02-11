import React, {Component} from 'react';

class Signup extends React.Component {
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
              <h1>Register new account</h1>
              <form id='signup'>
                <input type='text' placeholder='email' />
                <input type={this.state.type} placeholder='Password' />
                <span onClick={this.toggleVis}>{this.state.type==='input'?'Hide':'Show'}</span>
                <input type='password' placeholder='Confirm password' />
                <input type='submit' value='Sign up' />
              </form>
              <button onClick={this.props.onClick}>Already have an account?</button>
            </div>
        );
    }
}

export default Signup;