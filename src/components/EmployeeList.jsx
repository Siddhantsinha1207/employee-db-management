import React, { useContext } from "react";
import "./EmployeeList.css";
import EmployeeListItem from "./EmployeeListItem";
import { EmployeeContext } from "../context/EmpContextProvider";

const EmployeeList = () => {
  const { employeeInfoData, handleRemoveEmployee } =
    useContext(EmployeeContext);

  return (
    <section className="emp-list">
      <h2 className="heading">Employee List</h2>
      <hr />
      <ul>
        {employeeInfoData.length > 0 ? (
          employeeInfoData.map((data) => {
            return (
              <EmployeeListItem
                data={data}
                key={data.id}
                handleRemoveEmployee={handleRemoveEmployee}
              />
            );
          })
        ) : (
          <p>No Data found</p>
        )}
      </ul>
    </section>
  );
};

export default EmployeeList;
