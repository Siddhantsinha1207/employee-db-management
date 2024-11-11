import React, { useContext, useRef } from "react";
import "./Dialog.css";
import { MdOutlineClear } from "react-icons/md";
import { EmployeeContext } from "../context/EmpContextProvider";
import SimpleReactValidator from "simple-react-validator";

const validator = new SimpleReactValidator();
console.log(validator);

const Dialog = () => {
  const { handleCloseModal, setEmployeeInfoData } = useContext(EmployeeContext);
  const btnRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Handling submit");
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    setEmployeeInfoData((prevData) => [
      ...prevData,
      Object.fromEntries(formData),
    ]);
    handleCloseModal();
  }

  return (
    <div className="modal" ref={btnRef}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Add Employee</h4>
          <button onClick={handleCloseModal}>
            <MdOutlineClear />
          </button>
        </div>
        <form className="employee-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name..." name="empName" />
          <input type="email" placeholder="Your Email..." name="empEmail" />
          {/* {validator.message("employeeEmil")} */}
          <input type="number" placeholder="Your Phone..." name="empPhone" />
          <input
            type="date"
            placeholder="Your Date of Birth..."
            name="empDob"
          />
          <textarea
            cols={10}
            rows={6}
            placeholder="Enter your address..."
            name="empAddr"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Dialog;
