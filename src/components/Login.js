import React, { Component } from "react";
// import Proptypes from "prop-types";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Login: { email: "", password: "" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      Login: { ...this.state.Login, [e.target.name]: e.target.value },
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.Login);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={this.state.Login.email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={this.state.Login.password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#top">password?</a>
        </p>
      </form>
    );
  }
}

// Login.propTypes = {
//   email: Proptypes.string.isRequired,
//   password: Proptypes.string.isRequired,
// };

export default Login;
