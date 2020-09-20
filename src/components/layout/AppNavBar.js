import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  //   const handleSubmit = () => {
  //     auth.SignOut();
  //     return <Redirect to="/sign-in" />;
  //   };

  return (
    <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed bg-primary navbar-brand-center">
      <div className="navbar-header d-xl-block d-none">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item">
            <Link className="navbar-brand" to="/">
              <div className="brand-logo">
                <img
                  className="logo"
                  //   style={{ borderRadius: "50%" }}
                  src="img/logo/logo-light.png"
                  alt="Calvin"
                />
              </div>
              <h2 className="brand-text mb-0">Frest</h2>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-wrapper">
        <div className="navbar-container content">
          <div className="navbar-collapse" id="navbar-mobile">
            <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
              <ul className="nav navbar-nav">
                <li className="nav-item mobile-menu mr-auto">
                  <a className="nav-link nav-menu-main menu-toggle" href="!#">
                    <i className="bx bx-menu"></i>
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav bookmark-icons">
                <li className="nav-item d-none d-lg-block">
                  <a
                    className="nav-link"
                    href="app-email.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Email"
                  >
                    <i className="ficon bx bx-envelope"></i>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a
                    className="nav-link"
                    href="app-chat.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chat"
                  >
                    <i className="ficon bx bx-chat"></i>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a
                    className="nav-link"
                    href="app-todo.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Todo"
                  >
                    <i className="ficon bx bx-check-circle"></i>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a
                    className="nav-link"
                    href="app-calendar.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Calendar"
                  >
                    <i className="ficon bx bx-calendar-alt"></i>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="nav navbar-nav float-right d-flex align-items-center">
              <li className="dropdown dropdown-language nav-item">
                <a
                  className="dropdown-toggle nav-link"
                  id="dropdown-flag"
                  href="!#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flag-icon flag-icon-us"></i>
                  <span className="selected-language d-lg-inline d-none">
                    English
                  </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-flag">
                  <a className="dropdown-item" href="!#" data-language="en">
                    <i className="flag-icon flag-icon-us mr-50"></i>English
                  </a>
                  <a className="dropdown-item" href="!#" data-language="fr">
                    <i className="flag-icon flag-icon-fr mr-50"></i>French
                  </a>
                  <a className="dropdown-item" href="!#" data-language="de">
                    <i className="flag-icon flag-icon-de mr-50"></i>German
                  </a>
                  <a className="dropdown-item" href="!#" data-language="pt">
                    <i className="flag-icon flag-icon-pt mr-50"></i>Portuguese
                  </a>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link nav-link-expand" href="!#">
                  <i className="ficon bx bx-fullscreen"></i>
                </a>
              </li>
              <li className="nav-item nav-search">
                <a className="nav-link nav-link-search pt-2" href="!#">
                  <i className="ficon bx bx-search"></i>
                </a>
                <div className="search-input">
                  <div className="search-input-icon">
                    <i className="bx bx-search primary"></i>
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Explore Frest..."
                    tabIndex="-1"
                    data-search="template-search"
                  />
                  <div className="search-input-close">
                    <i className="bx bx-x"></i>
                  </div>
                  <ul className="search-list"></ul>
                </div>
              </li>
              <li className="dropdown dropdown-notification nav-item">
                <a
                  className="nav-link nav-link-label"
                  href="!#"
                  data-toggle="dropdown"
                >
                  <i className="ficon bx bx-bell bx-tada bx-flip-horizontal"></i>
                  <span className="badge badge-pill badge-danger badge-up">
                    5
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <div className="dropdown-header px-1 py-75 d-flex justify-content-between">
                      <span className="notification-title">
                        7 new Notification
                      </span>
                      <span className="text-bold-400 cursor-pointer">
                        Mark all as read
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-user nav-item">
                <a
                  className="dropdown-toggle nav-link dropdown-user-link"
                  href="!#"
                  data-toggle="dropdown"
                >
                  <div className="user-nav d-lg-flex d-none">
                    <span className="user-name">John Doe</span>
                    <span className="user-status">Available</span>
                  </div>
                  <span>
                    <img
                      className="round"
                      style={{ borderRadius: "50%" }}
                      src="img/logo/avatar-s-12.jpg"
                      alt="avatar"
                      height="40"
                      width="40"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right pb-0">
                  <a className="dropdown-item" href="page-user-profile.html">
                    <i className="bx bx-user mr-50"></i> Edit Profile
                  </a>
                  <div className="dropdown-divider mb-0"></div>
                  <a className="dropdown-item" href="auth-login.html">
                    <i className="bx bx-power-off mr-50"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
