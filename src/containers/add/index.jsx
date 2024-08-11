import React, { useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const { user, onAdd } = useStateContext();

  useEffect(() => {
    if(!user) navigate("/login")
  }, [user, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const visiterData = {
      name: formData.get("name"),
      location: formData.get("location"),
      phone: formData.get("phone"),
      count: parseInt(formData.get("count"), 10),
      date: formData.get("date"),
      state: formData.get("state") === "on", // Checkbox returns "on" when checked
    };
    onAdd(visiterData);
  };

  return (
    <div className="addVisiterContainer">
      <form className="addVisiterForm" onSubmit={onSubmitHandler}>
        <div className="formField">
          <label htmlFor="name">Lead Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="lead name"
            required
          />
        </div>
        <div className="formField">
          <label htmlFor="location">City</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="City"
            required
          />
        </div>
        <div className="formField">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+94-xx-xxx-xxxx"
            required
          />
        </div>
        <div className="formField">
          <label htmlFor="count">Peoples</label>
          <input
            type="number"
            name="count"
            id="count"
            placeholder="Peoples"
            required
          />
        </div>
        <div className="formField">
          <label htmlFor="count">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Peoples"
            required
          />
        </div>
        <div className="formField">
          <label htmlFor="state">Check In</label>
          <input
            type="checkBox"
            name="state"
            id="state"
          />
        </div>
        <div className="formField">
          <input type="submit" value="ADD" id="addBtn" className="btn addBtn" />
        </div>
      </form>
    </div>
  );
}

export default Add;
