import React from "react";
import { Head } from "../../styles/styles";

import Users from "../../component/Users";
import Appointments from "../../component/Appointments";

function Dashboard() {
  return (
    <div>
      <Head>Dashboard</Head>
      <div className="row">
        <div className="d-flex">
          <div className="col-md-6">
            <Users />
          </div>
          <div className="col-md-6">
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
