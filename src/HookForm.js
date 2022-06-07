import React from "react";
import { useForm } from "./useForm";

export function HookForm() {
    const{ valueInput, printInput }=useForm()
  return (
    <div>
      <h1>CustomForm</h1>

      <form>
        <input  onChange={valueInput}></input>
        <input type="password" onChange={valueInput}></input>
        <input type="checkbox" onChange={valueInput}></input>
        <button onClick={printInput}>login</button>
      </form>
    </div>
  );
};
