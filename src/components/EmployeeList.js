import React, { useState } from "react";
import Employee from "./Employee";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Lumini",
      email: "lumini@gmail.com",
      address: "816,Ukwatta,Avissawella",
      Pphone: "(0725569852)",
    },
    {
      id: 2,
      name: "Thismini",
      email: "thismini@gmail.com",
      address: "816,Ukwatta,Avissawella",
      Pphone: "(0725569852)",
    },
    {
      id: 3,
      name: "Akash",
      email: "akash@gmail.com",
      address: "816,Ukwatta,Avissawella",
      Pphone: "(0725569852)",
    },
    {
      id: 4,
      name: "Thamara",
      email: "thamara@gmail.com",
      address: "816,Ukwatta,Avissawella",
      Pphone: "(0725569852)",
    },
    {
      id: 5,
      name: "Samanthilake",
      email: "samanthilake@gmail.com",
      address: "816,Ukwatta,Avissawella",
      Pphone: "(0725569852)",
    },
  ]);
  return (
    <React.Fragment>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a
              href="#addEmployeeModal"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
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
            {employee.map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))}
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default EmployeeList;
