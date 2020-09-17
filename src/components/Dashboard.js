import React from "react";
import Clients from "./clients/Clients";

function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
    </div>
  );
}
export default Dashboard;
