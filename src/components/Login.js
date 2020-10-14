import React, { useState, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { authContext } from "../context/Auth/AuthState";
 import { ToastContainer } from 'react-toastify';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const globalUser = useContext(authContext);
  const { login } = globalUser;



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email === "" || password === "") {
      // set alert
    } else {
      login(email, password).then(() => {
        history.push("/");
      });
    }
  };
  //  const {isLoggedin} = useContext(authContext);
  //  if (isLoggedin) {
  //    return <Redirect to="/" />;
  //  }

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
                        <ToastContainer /> 
                        <form onSubmit={handleSubmit}>
                          <div className="form-group mb-50">
                            <label
                              className="text-bold-600"
                              htmlFor="exampleInputEmail1"
                            >
                              Email address
                            </label>
                            <input
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
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
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Enter password"
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

export default Login;
