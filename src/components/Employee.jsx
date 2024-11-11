import React, { useContext } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeInfo from "./EmployeeInfo";
import "./Employee.css";
import { createPortal } from "react-dom";
import Dialog from "./Dialog";
import { EmployeeContext } from "../context/EmpContextProvider";

const Employee = () => {
  const { openModal, handleOpenModal } = useContext(EmployeeContext);
  return (
    <>
      <div className="employees">
        <EmployeeList />
        <EmployeeInfo />
      </div>
      {openModal && createPortal(<Dialog />, document.body)}
      <button className="add" onClick={handleOpenModal}>
        Add Employee
      </button>
    </>
  );
};

export default Employee;
