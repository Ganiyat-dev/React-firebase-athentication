import React, { Component } from "react";
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

  componentDidMount() {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.setState({
          Login: { ...this.state.Login, user: authUser.displayName },
        });
        // console.log(authUser.displayName);
      } else {
        this.setState({
          Login: {
            ...this.state.Login,
            user: null,
          },
        });
      }
    });
  }

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
