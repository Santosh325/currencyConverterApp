import React from "react";

function Input({ label, defaultValue }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <div className="">
        <select className=" h-[40px] px-6" value={defaultValue}>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
