/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { authContext } from "../../context/Auth/AuthState";

const SideBar = () => {
  const globalUser = useContext(authContext);
  const { user } = globalUser; 

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="dashboard-ecommerce">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-12 dashboard-greetings">
                <div className="card">
                  <div className="card-header">
                    {user && (
                      <h3 className="greeting-text">{`Congratulations, ${
                        user.split(" ")[0]
                      }!`}</h3>
                    )}
                    <p className="mb-0">Best seller of the month</p>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="dashboard-content-left">
                          <h1 className="text-primary font-large-2 text-bold-500">
                            $89k
                          </h1>
                          <p>You have done 57.6% more sales today.</p>
                          <button
                            type="button"
                            className="btn btn-primary glow"
                          >
                            View Sales
                          </button>
                        </div>
                        <div className="dashboard-content-right">
                          <img
                            src="../../../app-assets/images/icon/cup.png"
                            height="220"
                            width="220"
                            className="img-fluid"
                            alt="Dashboard Ecommerce"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-12 dashboard-visit">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="card-title">Visits of 2019</h4>
                    <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <div id="multi-radial-chart"></div>
                      <ul className="list-inline d-flex justify-content-around mb-0">
                        <li>
                          <span className="bullet bullet-xs bullet-primary mr-50"></span>
                          Target
                        </li>
                        <li>
                          <span className="bullet bullet-xs bullet-danger mr-50"></span>
                          Mart
                        </li>
                        <li>
                          <span className="bullet bullet-xs bullet-warning mr-50"></span>
                          Ebay
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12 dashboard-users">
                <div className="row  ">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-sm-6 col-12 dashboard-users-success">
                        <div className="card text-center">
                          <div className="card-content">
                            <div className="card-body py-1">
                              <div className="badge-circle badge-circle-lg badge-circle-light-success mx-auto mb-50">
                                <i className="bx bx-briefcase-alt font-medium-5"></i>
                              </div>
                              <div className="text-muted line-ellipsis">
                                New Products
                              </div>
                              <h3 className="mb-0">1.2k</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 dashboard-users-danger">
                        <div className="card text-center">
                          <div className="card-content">
                            <div className="card-body py-1">
                              <div className="badge-circle badge-circle-lg badge-circle-light-danger mx-auto mb-50">
                                <i className="bx bx-user font-medium-5"></i>
                              </div>
                              <div className="text-muted line-ellipsis">
                                New Users
                              </div>
                              <h3 className="mb-0">45.6k</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-6 col-12 dashboard-revenue-growth">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between align-items-center pb-0">
                            <h4 className="card-title">Revenue Growth</h4>
                            <div className="d-flex align-items-end justify-content-end">
                              <span className="mr-25">$25,980</span>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body pb-0">
                              <div id="revenue-growth-chart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-12 dashboard-order-summary">
                <div className="card">
                  <div className="row">
                    <div className="col-md-8 col-12 order-summary border-right pr-md-0">
                      <div className="card mb-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="card-title">Order Summary</h4>
                          <div className="d-flex">
                            <button
                              type="button"
                              className="btn btn-sm btn-light-primary mr-1"
                            >
                              Month
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary glow"
                            >
                              Week
                            </button>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body p-0">
                            <div id="order-summary-chart"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-12 pl-md-0">
                      <div className="card mb-0">
                        <div className="card-header pb-50">
                          <h4 className="card-title">Sales History</h4>
                        </div>
                        <div className="card-content">
                          <div className="card-body py-1">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <div className="sales-item-name">
                                <p className="mb-0">Airpods</p>
                                <small className="text-muted">30 min ago</small>
                              </div>
                              <div className="sales-item-amount">
                                <h6 className="mb-0">
                                  <span className="text-success">+</span> $50
                                </h6>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <div className="sales-item-name">
                                <p className="mb-0">iPhone</p>
                                <small className="text-muted">2 hour ago</small>
                              </div>
                              <div className="sales-item-amount">
                                <h6 className="mb-0">
                                  <span className="text-danger">-</span> $59
                                </h6>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="sales-item-name">
                                <p className="mb-0">Macbook</p>
                                <small className="text-muted">1 day ago</small>
                              </div>
                              <div className="sales-item-amount">
                                <h6 className="mb-0">
                                  <span className="text-success">+</span> $12
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer border-top pb-0">
                            <h5>Total Sales</h5>
                            <span className="text-primary text-bold-500">
                              $82,950.96
                            </span>
                            <div className="progress progress-bar-primary progress-sm my-50">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="78"
                                style={{ width: "78%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-12 dashboard-latest-update">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center pb-50">
                    <h4 className="card-title">Latest Update</h4>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSec"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        2019
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSec"
                      >
                        <a className="dropdown-item" href="#">
                          2019
                        </a>
                        <a className="dropdown-item" href="#">
                          2018
                        </a>
                        <a className="dropdown-item" href="#">
                          2017
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body p-0 pb-1">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                          <div className="list-left d-flex">
                            <div className="list-icon mr-1">
                              <div className="avatar bg-rgba-primary m-0">
                                <div className="avatar-content">
                                  <i className="bx bxs-zap text-primary font-size-base"></i>
                                </div>
                              </div>
                            </div>
                            <div className="list-content">
                              <span className="list-title">Total Products</span>
                              <small className="text-muted d-block">
                                1.2k New Products
                              </small>
                            </div>
                          </div>
                          <span>10.6k</span>
                        </li>
                        <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                          <div className="list-left d-flex">
                            <div className="list-icon mr-1">
                              <div className="avatar bg-rgba-info m-0">
                                <div className="avatar-content">
                                  <i className="bx bx-stats text-info font-size-base"></i>
                                </div>
                              </div>
                            </div>
                            <div className="list-content">
                              <span className="list-title">Total Sales</span>
                              <small className="text-muted d-block">
                                39.4k New Sales
                              </small>
                            </div>
                          </div>
                          <span>26M</span>
                        </li>
                        <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                          <div className="list-left d-flex">
                            <div className="list-icon mr-1">
                              <div className="avatar bg-rgba-danger m-0">
                                <div className="avatar-content">
                                  <i className="bx bx-credit-card text-danger font-size-base"></i>
                                </div>
                              </div>
                            </div>
                            <div className="list-content">
                              <span className="list-title">Total Revenue</span>
                              <small className="text-muted d-block">
                                43.5k New Revenue
                              </small>
                            </div>
                          </div>
                          <span>15.89M</span>
                        </li>
                        <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                          <div className="list-left d-flex">
                            <div className="list-icon mr-1">
                              <div className="avatar bg-rgba-success m-0">
                                <div className="avatar-content">
                                  <i className="bx bx-dollar text-success font-size-base"></i>
                                </div>
                              </div>
                            </div>
                            <div className="list-content">
                              <span className="list-title">Total Cost</span>
                              <small className="text-muted d-block">
                                Total Expenses
                              </small>
                            </div>
                          </div>
                          <span>1.25B</span>
                        </li>
                        <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                          <div className="list-left d-flex">
                            <div className="list-icon mr-1">
                              <div className="avatar bg-rgba-primary m-0">
                                <div className="avatar-content">
                                  <i className="bx bx-user text-primary font-size-base"></i>
                                </div>
                              </div>
                            </div>
                            <div className="list-content">
                              <span className="list-title">Total Users</span>
                              <small className="text-muted d-block">
                                New Users
                              </small>
                            </div>
                          </div>
                          <span>1.2k</span>
                        </li>
                        <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                          <div className="list-left d-flex">
                            <div className="list-icon mr-1">
                              <div className="avatar bg-rgba-danger m-0">
                                <div className="avatar-content">
                                  <i className="bx bx-edit-alt text-danger font-size-base"></i>
                                </div>
                              </div>
                            </div>
                            <div className="list-content">
                              <span className="list-title">Total Visits</span>
                              <small className="text-muted d-block">
                                New Visits
                              </small>
                            </div>
                          </div>
                          <span>4.6k</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
