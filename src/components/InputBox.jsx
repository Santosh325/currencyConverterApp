import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import Input from "./Input";
function InputBox() {
  return (
    <div className="flex justify-between mt-4 mb-2">
      <Input label="From" defaultValue="EUR" />
      <div className="mt-1 cursor-pointer">
        <br />
        <AiOutlineSwap size={32} />
      </div>
      <Input label="To" defaultValue="USD" />
    </div>
  );
}

export default InputBox;
