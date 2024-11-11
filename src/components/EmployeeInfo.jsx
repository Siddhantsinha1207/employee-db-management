import React, { useContext } from "react";
import "./EmployeeInfo.css";
import { EmployeeContext } from "../context/EmpContextProvider";

const EmployeeInfo = () => {
  const { employeeInfoData, activeEmployee } = useContext(EmployeeContext);
  console.log(employeeInfoData);
  return (
    <section className="employee-info">
      <h2 className="heading">Employee Information</h2>
      <hr />
      <div className="emp-data">
        <h3 className="emp-name">{activeEmployee.empName}</h3>
        <p className="emp-address">{activeEmployee.address}</p>
        <p className="emp-email">{activeEmployee.email}</p>
        <p className="emp-phone">{activeEmployee.mobile}</p>
        <p className="emp-dob">{activeEmployee.dob}</p>
      </div>
    </section>
  );
};

export default EmployeeInfo;
