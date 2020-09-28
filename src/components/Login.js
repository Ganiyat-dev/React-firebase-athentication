import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../Firebase";

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
    //console.log(this.state.Login);
    const { email, password } = this.state.Login;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => alert(error.message));
  }

  // componentDidMount() {
  //   console.log("cdm");
  // }

  render() {
    return (
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body"></div>
          <section id="auth-login" className="row flexbox-container">
            <div className="col-xl-8 col-11">
              <div className="card bg-authentication mb-0">
                <div className="row m-0">
                  <div className="col-md-6 col-12 px-0">
                    <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                      <div className="card-header pb-1">
                        <div className="card-title">
                          <h4 className="text-center mb-2">Welcome Back</h4>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-group mb-50">
                              <label
                                className="text-bold-600"
                                htmlFor="exampleInputEmail1"
                              >
                                Email address
                              </label>
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
                              <label
                                className="text-bold-600"
                                htmlFor="exampleInputPassword1"
                              >
                                Password
                              </label>
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
                                  <label
                                    className="checkboxsmall"
                                    htmlFor="exampleCheck1"
                                  >
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
                              Login
                              <i
                                id="icon-arrow"
                                className="bx bx-right-arrow-alt"
                              ></i>
                            </button>
                          </form>
                          <hr />
                          <div className="text-center">
                            <small className="mr-25">
                              Don't have an account?
                            </small>
                            <Link to="/sign-up">
                              <small>Sign up</small>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                    <div className="card-content">
                      <img
                        className="img-fluid"
                        src="/app-assets/images/pages/login.png"
                        alt="branding logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//   email: Proptypes.string.isRequired,
//   password: Proptypes.string.isRequired,
// };

export default Login;
