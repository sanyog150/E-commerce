import React from "react";
import Sidebar from "./Sidebar";
import Breadcrum from "../../Components/Breadcrum";
import Profile from "../../Components/Profile";

const AdminHome = () => {
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Profile title="Admin Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
