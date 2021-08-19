import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
          <div className="center">
            <h1>Login Form</h1>
            <form method="post">
              <div className="txt_field">
                <input type="text" name="" required />
                <span></span>
                <label>Username</label>
              </div>

              <div className="txt_field">
                <input type="password" name="" required />
                <span></span>
                <label>Password</label>
              </div>

              <div className="pass">Forgot Password</div>
              <input type="submit" value="Login"></input>
              <div className="signup_link">
                  Not a member? <a href="#">Sign up</a>
              </div>
            </form>
          </div>
        );
    }
}

export default Login
