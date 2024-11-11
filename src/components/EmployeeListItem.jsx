import React, { useContext } from "react";
import "./EmployeeListItem.css";
import { MdOutlineClear } from "react-icons/md";
import { EmployeeContext } from "../context/EmpContextProvider";

const EmployeeListItem = (props) => {
  const { data, handleRemoveEmployee } = props;
  const { empName, id } = data;
  const { employeeInfoData, setActiveEmployee } = useContext(EmployeeContext);

  function handleEmployee(id) {
    const clickedEmployee = employeeInfoData.find((emp) => emp.id === id);

    setActiveEmployee(clickedEmployee);
  }

  return (
    <li className="list" onClick={() => handleEmployee(id)}>
      <div className="empName">{empName}</div>
      <button onClick={() => handleRemoveEmployee(id)}>
        <MdOutlineClear />
      </button>
    </li>
  );
};

export default EmployeeListItem;
