import React from "react";
import FormField from "./FormField.js";

export default function Calculator() {
  return (
    <div className="calculator container">
      <form className="form--calculator">
        <div className="mb-3">
          <label htmlFor="value1">Convert</label>
          <FormField id="value1" />
        </div>
        <div className="mb-3">
          <label htmlFor="value2">To</label>
          <FormField id="value2" />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Calculate</button>
        </div>
      </form>
    </div>
  );
}
