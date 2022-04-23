import React from "react";
import Currencies from "../Currencies.js";

export default function FormField(props) {
  const currencies = Currencies.map((currency, index) => {
    return (
      <option
        key={index}
        value={currency.symbol}
      >{`${currency.name} ${currency.symbol}`}</option>
    );
  });
  return (
    <div className="form--input--area">
      <input
        id={props.id}
        className="form-control input-request"
        type="text"
        placeholder="Enter value"
      />
      <select className="form-select input-request">{currencies}</select>
    </div>
  );
}
