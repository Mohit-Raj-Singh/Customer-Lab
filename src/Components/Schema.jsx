import React from "react";
import "./Schema.css";

export const Schema = () => {
  return (
    <div>
      <div>
        <label htmlFor="">First Name</label>
        <select name="" id="">
          <option value="first_name">First Name</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <select name="" id="">
          <option value="last_name">Last Name</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Gender</label>
        <select name="" id="">
          <option value="gender">Gender</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Age</label>
        <select name="" id="">
          <option value="age">Age</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Accont Name</label>
        <select name="" id="">
          <option value="accont_name">Accont Name</option>
        </select>
      </div>
      <div>
        <label htmlFor="">City</label>
        <select name="" id="">
          <option value="city">City</option>
        </select>
      </div>
      <div>
        <label htmlFor="">State</label>
        <select name="" id="">
          <option value="state">State</option>
        </select>
      </div>
    </div>
  );
};
