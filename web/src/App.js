import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import UserLoginForm from './components/login/userForm/userFrom';
import OtpForm from './components/login/otpForm/OtpForm';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router>
          <div>
            <Route exact path="/login" component={UserLoginForm} />
            <Route path="/otp" component={OtpForm} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
        </header>
      </div>
    );
  }
}

export default App;
