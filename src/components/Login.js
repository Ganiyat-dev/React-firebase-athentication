import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../Firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Login: { email: "", password: "", user: null },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       this.setState({
  //         Login: { ...this.state.Login, user: authUser.displayName },
  //       });
  //       // console.log(authUser.displayName);
  //     } else {
  //       this.setState({
  //         Login: {
  //           ...this.state.Login,
  //           user: null,
  //         },
  //       });
  //     }
  //   });
  // }

  handleChange(e) {
    this.setState({
      Login: { ...this.state.Login, [e.target.name]: e.target.value },
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.Login);
    const { email, password } = this.state.Login;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // user.user.updateProfile({
        //   displayName: `${this.state.Register.FirstName} ${this.state.Register.LastName}`,
        // });
        this.props.history.push("/");
      })
      .catch((error) => alert(error.message));
  }

  // componentDidMount() {
  //   console.log("cdm");
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card-title">
          <h4 className="text-center mb-2">Welcome Back</h4>
        </div>

        <div className="form-group mb-50">
          <label className="text-bold-600">Email address</label>
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
          <label className="text-bold-600">Password</label>
          <input
            value={this.state.Login.password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
          <div className="text-left">
            <div className="checkbox checkbox-sm">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="checkboxsmall" htmlFor="exampleCheck1">
                <small>Keep me logged in</small>
              </label>
            </div>
          </div>
          <div className="text-right">
            <a href="/" className="card-link">
              <small>Forgot Password?</small>
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary glow w-100 position-relative"
        >
          <i className="fas fa-arrow-circle-right" /> Login
        </button>

        <div className="text-center mb-100">
          <small className="mr-25">Don't have an account?</small>
          <Link to="/sign-up">
            <small>Sign up</small>
          </Link>
        </div>
      </form>
    );
  }
}

// Login.propTypes = {
//   email: Proptypes.string.isRequired,
//   password: Proptypes.string.isRequired,
// };

export default Login;
