import React from "react";
import AppNavBar from "../layout/AppNavBar";
import Clients from "../clients/Clients";
import Notifications from "./Notifications";

function Dashboard() {
  return (
    <>
      <AppNavBar />
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="row">
              <div className="col s12 m6">
                <Clients />
              </div>
              <div className="col s12 m5 offset">
                <Notifications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
