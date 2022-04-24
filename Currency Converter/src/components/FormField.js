import React from "react";

export default function FormField(props) {
  const currencies = props.currencies.map((currency, index) => {
    return (
      <option
        key={index}
        value={currency.name}
      >{`${currency.name} ${currency.symbol}`}</option>
    );
  });
  return (
    <div className="form--input--area">
      <select
        className="form-select input-request"
        id={props.id}
        name={props.name}
        onChange={(event) => props.handleChange(event)}
      >
        {currencies}
      </select>
    </div>
  );
}
