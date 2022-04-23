import React from "react";
import FormField from "./FormField.js";

export default function Calculator() {
  return (
    <div className="calculator container">
      <form className="form--calculator">
        <div className="mb-3">
          <label htmlFor="value1">Enter value:</label>
          <input
            id="value1"
            className="form-control input-request"
            type="text"
            placeholder="Enter value"
          />
        </div>
        <div className="mb-3">
          <label>Convert from</label>
          <FormField />
        </div>
        <div className="mb-3">
          <label>To</label>
          <FormField />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Calculate</button>
        </div>
      </form>
    </div>
  );
}
