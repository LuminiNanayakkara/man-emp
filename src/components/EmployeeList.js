import React from "react";
import Employee from "./Employee";

const EmployeeList = () => {
  return (
    <React.Fragment>
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div class="col-sm-6">
            <a
              href="#addEmployeeModal"
              class="btn btn-success"
              data-toggle="modal"
            >
              <i class="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </a>
          </div>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Employee />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default EmployeeList;
