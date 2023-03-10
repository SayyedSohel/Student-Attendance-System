import React from "react";
import { useState } from "react/cjs/react.development";
import FormInput from "./FormInput";
import Table from "./Table";

function Main() {
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState(0);

  const [formInputData, setformInputData] = useState({
    fullName: "",
    rollNumber: "",
    checkInTime: "",
    checkOutTime: ""
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = {
        fullName: "",
        rollNumber: "",
        checkInTime: "",
        checkOutTime: ""
      };
      setformInputData(emptyInput);
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1> Student Attendance </h1>
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table tableData={tableData} />
            <div className="total">Total Students : {count} </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
}
export default Main;
