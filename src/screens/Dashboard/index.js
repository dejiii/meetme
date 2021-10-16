import React from "react";

import Users from "../../component/Users";
// import Appointments from "../../component/Appointments";

function Dashboard() {
  return (
    <div>
      <div className="row">
        <Users />
        {/* <div className="col-md-6 pl-5">
            <Appointments />
          </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
