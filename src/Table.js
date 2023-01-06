import "./Table.css";

function Table({ tableData }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Full Name</th>
            <th>Roll Number</th>
            <th>Check-In-Time</th>
            <th>Check-Out-Time</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.fullName}</td>
                <td>{data.rollNumber}</td>
                <td>{data.checkInTime}</td>
                <td>{data.checkOutTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
