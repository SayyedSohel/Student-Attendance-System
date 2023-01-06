import "./Display.css";

function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row">
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.fullName}
          name="fullName"
          className="form-control"
          placeholder="Full Name"
          id="student-name"
        />
      </div>
      <div className="col">
        <input
          type="email"
          onChange={handleChange}
          value={formInputData.rollNumber}
          name="rollNumber"
          className="form-control"
          placeholder="Roll Number"
          id="student-roll"
        />
      </div>
      <div className="col">
        <input
          type="time"
          onChange={handleChange}
          value={formInputData.checkInTime}
          name="checkInTime"
          className="form-control"
          placeholder="check-In-Time"
          id="In"
        />
      </div>
      <div className="col">
        <input
          type="time"
          onChange={handleChange}
          value={formInputData.checkOutTime}
          name="checkOutTime"
          className="form-control"
          placeholder="check-Out-Time"
          id="Out"
        />
      </div>
      <div className="col">
        <input
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}

export default FormInput;
