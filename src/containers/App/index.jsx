import React, { useEffect, useState } from "react";
import Clock from "../../components/Clock";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import _ from "lodash";

function App() {
  const navigate = useNavigate();
  const { user, VisitingUsers, toggleVisitorState, visitingCount, income } =
    useStateContext();
  const [filterUser, setFilterUser] = useState([]);
  const [options, setOptions] = useState(true);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    if (VisitingUsers) {
      const filtered = VisitingUsers.filter((data) => data.state === options);
      setFilterUser(filtered);
    }
  }, [options, VisitingUsers]);

  const toggleVisitState = (phoneNumber, currentState) => {
    toggleVisitorState(phoneNumber, !currentState);
  };

  return (
    <div className="app">
      <Clock />
      <div className="dailyIncome Box">
        <div className="income">
          <span>income</span>
          <h2>Rs.{income}.00</h2>
        </div>
        <div className="visitingCount">
          <span>visiting count</span>
          <h2>{visitingCount}</h2>
        </div>
      </div>
      <div className="inOut Box">
        <h2>today visits</h2>
        <div className="filterVisit">
          <select
            name="select"
            id="select"
            onChange={(e) => {
              setOptions(e.target.value === "true");
            }}
          >
            <option value="true">IN</option>
            <option value="false">OUT</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <td>Visiter Name</td>
              <td>Location</td>
              <td>Mobile</td>
              <td>Vister Count</td>
              <td>State</td>
            </tr>
          </thead>
          <tbody>
            {filterUser.length > 0 ? (
              filterUser.map((visitGroup) => (
                <tr key={visitGroup.phone} className="visitGroup">
                  <td>{visitGroup.name}</td>
                  <td>{visitGroup.location}</td>
                  <td>{visitGroup.phone}</td>
                  <td>{visitGroup.count}</td>
                  <input
                    type="button"
                    value="Change State"
                    onClick={() =>
                      toggleVisitState(visitGroup.phone, visitGroup.state)
                    }
                    className={visitGroup.state ? "btn clrS" : "btn clrW"}
                  />
                </tr>
              ))
            ) : (
              <p>No visits available</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
