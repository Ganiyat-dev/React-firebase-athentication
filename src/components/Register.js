import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/Auth/AuthState";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const globalUser = useContext(authContext);
  const { register } = globalUser;

   useEffect(() => {
    document.title = "Register Page";
  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("handleSubmit");
    if (email === "" || password === "") {
      // set alert
    } else {
      register(email, password, FirstName, LastName)
      // .then(() => {
      //   history.push("/");
      // })
      
      

      // console.log(email);
    }
  };
  
    
     

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body"></div>
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
                          Please enter your details to sign up and be part of
                          our great community
                        </small>
                      </p>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group mb-50">
                            <label htmlFor="inputfirstname4">first name</label>
                            <input
                              value={FirstName}
                              type="text"
                              name="FirstName"
                              className="form-control"
                              placeholder="First name"
                              onChange={(event) =>
                                setFirstName(event.target.value)
                              }
                            />
                          </div>
                          <div className="form-group mb-50">
                            <label htmlFor="inputlastname4">last name</label>
                            <input
                              value={LastName}
                              type="text"
                              name="LastName"
                              className="form-control"
                              placeholder="Last name"
                              onChange={(event) =>
                                setLastName(event.target.value)
                              }
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
                              value={email}
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              onChange={(event) => setEmail(event.target.value)}
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
                              value={password}
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Enter password"
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary glow position-relative w-100"
                          >
                            {/* {this.loading ? (
                                <i className="fas fa-spin fa-spinner"></i>
                              ) : (
                                "SIGN UP"
                              )} */}{" "}
                            SIGN UP
                          </button>
                        </form>
                        <hr />
                        <div className="text-center">
                          <small className="mr-25">
                            Already have an account?
                          </small>
                          <Link to="/sign-in"> sign in </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                  <img
                    className="img-fluid"
                    src="/app-assets/images/pages/register.png"
                    alt="branding logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
