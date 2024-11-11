import { createContext, useState } from "react";
import { employeeData } from "../utils/users";

const formData = {
  empName: "",
  empEmail: "",
  empPhone: "",
  empDob: null,
  empAddr: "",
};

export const EmployeeContext = createContext();

export default function EmpContext({ children }) {
  const [employeeInfoData, setEmployeeInfoData] = useState(employeeData);
  const [activeEmployee, setActiveEmployee] = useState(employeeData[0]);
  const [openModal, setOpenModal] = useState(false);

  function handleRemoveEmployee(id) {
    const filterEmployee = employeeInfoData.filter(
      (employee) => employee.id !== id
    );
    setEmployeeInfoData(filterEmployee);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <EmployeeContext.Provider
      value={{
        employeeInfoData,
        setEmployeeInfoData,
        handleRemoveEmployee,
        openModal,
        handleOpenModal,
        handleCloseModal,
        activeEmployee,
        setActiveEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
