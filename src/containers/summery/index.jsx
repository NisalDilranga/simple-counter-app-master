import React, { useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { useNavigate } from "react-router-dom";

function Summery() {
  const navigate = useNavigate();

  const { user, VisitingUsers } = useStateContext();

  useEffect(() => {
    if (!user) navigate("/login");
  });

  return (
    <div className="summery">
      <h2>Summery</h2>
      <table>
        <thead>
          <tr className="tHead">
            <td>Visiter Name</td>
            <td>Location</td>
            <td>Mobile</td>
            <td>Date</td>
            <td>Group Count</td>
            <td>State</td>
          </tr>
        </thead>
        <tbody>
          {VisitingUsers &&
            VisitingUsers?.map((doc) => (
              <tr className="clrBG">
                <td>{doc.name}</td>
                <td>{doc.location}</td>
                <td>{doc.phone}</td>
                <td>{doc.date}</td>
                <td>{doc.count}</td>
                <td>{doc.state ? (<div className="in"></div>) : (<div className="out"></div>)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Summery;
