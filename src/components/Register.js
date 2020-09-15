import React, { Component } from "react";
import auth from "../Firebase";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      Register: { FirstName: "", LastName: "", email: "", password: "" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      Register: { ...this.state.Register, [e.target.name]: e.target.value },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.Register);
    const { email, password } = this.state.Register;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => alert(error.message));
  }

  componentDidMount() {
    console.log("cdm");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            value={this.state.Register.FirstName}
            type="text"
            name="FirstName"
            className="form-control"
            placeholder="First name"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            value={this.state.Register.LastName}
            type="text"
            name="LastName"
            className="form-control"
            placeholder="Last name"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={this.state.Register.email}
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
            value={this.state.Register.password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn-btn-primary btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#top"> sign in</a>
        </p>
      </form>
    );
  }
}

export default Register;
