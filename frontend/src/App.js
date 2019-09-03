import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Login from './Login.js'
import Register from './Register.js'
import About from './About.js'

class App extends Component {
  // state = { username: "", isAuthenticated : false };

  updateUsername = () => {
    // const username = localStorage.getItem("username");
    // this.setState({ username: username });
    // if (username.length > 0) {
    //   this.setState({isAuthenticated : true});
    //   console.log("true");
    // } else {
    //   this.setState({isAuthenticated : false});
    //   console.log("false");
    // }
  };

  logout = () => {
    localStorage.clear();
    // this.setState({username : "", isAuthenticated : false});
  }

  render() {
    return (
      <Router>
        <div className="topMenu">
          <Link to="/login">Login</Link>
          <span> </span>
          <Link to="/register">Register</Link>
          <span> </span>
          <Link to="/about">About</Link>
          <span> </span>
          <span>Logged in user: {localStorage.getItem("username")}</span>
          <span> </span>
          {localStorage.getItem("username") !== null ? <span><Link to="/login" onClick={this.logout}>Log out</Link></span> : null}
        </div>

        <div className="container">
          <Route
            path="/login"
            render={props => <Login updateUsername={this.updateUsername} />}
           />
          <Route path="/register" component={Register}/>
          <PrivateRoute path="/about" component={About}/>
        </div>
      </Router>
    );
  }

}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("username") !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;