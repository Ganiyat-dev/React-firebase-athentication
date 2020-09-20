import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../Firebase";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      Register: {
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        user: null,
      },
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
    // console.log(this.state.Register);
    const { email, password } = this.state.Register;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.user.updateProfile({
          displayName: `${this.state.Register.FirstName} ${this.state.Register.LastName}`,
        });
        this.props.history.push("/");
      })
      .catch((error) => alert(error.message));
  }

  render() {
    // console.log(this.state.Register.user);
    return (
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <section className="row flexbox-container">
              <div className="col-xl-8 col-10">
                <div className="card bg-authentication mb-0">
                  <div className="row m-0">
                    <div className="col-md-6 col-12 px-0">
                      <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                        <div className="card-header pb-1">
                          <div className="card-title">
                            <h4 className="text-center mb-2">Sign Up</h4>
                          </div>
                        </div>
                        <div className="text-center">
                          <p>
                            {" "}
                            <small>
                              {" "}
                              Please enter your details to sign up and be part
                              of our great community
                            </small>
                          </p>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                              <div className="form-group mb-50">
                                <label htmlFor="inputfirstname4">
                                  first name
                                </label>
                                <input
                                  value={this.state.Register.FirstName}
                                  type="text"
                                  name="FirstName"
                                  className="form-control"
                                  placeholder="First name"
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group mb-50">
                                <label htmlFor="inputlastname4">
                                  last name
                                </label>
                                <input
                                  value={this.state.Register.LastName}
                                  type="text"
                                  name="LastName"
                                  className="form-control"
                                  placeholder="Last name"
                                  onChange={this.handleChange}
                                />
                              </div>

                              <div className="form-group mb-50">
                                <label
                                  className="text-bold-600"
                                  htmlFor="exampleInputEmail1"
                                >
                                  Email address
                                </label>
                                <input
                                  value={this.state.Register.email}
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="Enter email"
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group mb-2">
                                <label
                                  className="text-bold-600"
                                  htmlFor="exampleInputPassword1"
                                >
                                  Password
                                </label>
                                <input
                                  value={this.state.Register.password}
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  placeholder="Enter password"
                                  onChange={this.handleChange}
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary glow position-relative w-100"
                              >
                                SIGN UP
                                <i
                                  id="icon-arrow"
                                  className="bx bx-right-arrow-alt"
                                ></i>
                              </button>
                            </form>
                            <hr />
                            <div className="text-center">
                              <small className="mr-25">
                                Already have an account?
                              </small>
                              <Link to="/sign-in"> sign in</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                      <img
                        className="img-fluid"
                        src="../../../app-assets/images/pages/register.png"
                        alt="branding logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
