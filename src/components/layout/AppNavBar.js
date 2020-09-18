import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import auth from "../../Firebase";

const AppNavBar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser.displayName);
        // console.log(authUser.displayName);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const handleSubmit = () => {
    auth.SignOut();
    return <Redirect to="/sign-in" />;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            Vennit
          </Link>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ml-auto">
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Register
                  </Link>
                </li>
              )}

              {user && (
                <button onClick={handleSubmit} className="btn btn-primary">
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default AppNavBar;
