import React from "react";
import FormField from "./FormField.js";
import Currencies from "../Currencies.js";

export default function Calculator() {
  const [formData, setFormData] = React.useState({
    value: "",
    convertFrom: "Euro",
    convertTo: "Euro",
  });

  const [messageToUser, setMessageToUser] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let message, newValue;
    if (isNaN(formData.value)) {
      message =
        "The value you've entered for conversion is not a number, please check!!!";
    } else {
      Currencies.forEach((currency) => {
        if (currency.name === formData.convertFrom) {
          currency.equivalents.forEach((equivalent) => {
            if (equivalent.name === formData.convertTo) {
              // Conversion made if found the currency to convert to, by multiplying user value with rate of change
              // This applies if the convertFrom value is different than the convertTo value
              newValue = Number(formData.value * equivalent.rate).toFixed(2); // And approximate the result to two decimal places
            }
          });
        }
      });

      if (formData.convertFrom === formData.convertTo) {
        message = `Result: ${formData.value} ${formData.convertFrom} is equal to ${formData.value} ${formData.convertTo}`;
      } else {
        message = `Result: ${formData.value} ${formData.convertFrom} is equal to ${newValue} ${formData.convertTo}`;
      }
    }

    setMessageToUser(message);
  }

  return (
    <div className="calculator container">
      <form className="form--calculator" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="value">Enter value:</label>
          <input
            id="value"
            name="value"
            value={FormData.value}
            onChange={handleChange}
            className="form-control input-request"
            type="text"
            placeholder="Enter value"
            required
          />
        </div>
        <div className="mb-3">
          <label>Convert from</label>
          <FormField
            id="convertFrom"
            name="convertFrom"
            value={formData.convertFrom}
            handleChange={handleChange}
            currencies={Currencies}
          />
        </div>
        <div className="mb-3">
          <label>To</label>
          <FormField
            id="convertTo"
            name="convertTo"
            value={formData.convertTo}
            handleChange={handleChange}
            currencies={Currencies}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Calculate</button>
        </div>
        <div className="resultMessage">{messageToUser}</div>
      </form>
    </div>
  );
}
