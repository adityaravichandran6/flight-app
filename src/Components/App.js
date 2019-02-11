import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    }
  }

  handleClick() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }
  
  render() {
    if(this.state.isLogin) {
      return (<Login onClick={() => this.handleClick()} />);
    } else {
      return (<Signup onClick={() => this.handleClick()} />);
    }
  }
}

export default App;