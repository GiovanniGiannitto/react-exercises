import { useState } from "react";

export function useForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInput = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((form) => {
      return {
        ...form,

        [name]: type === "checked" ? checked : value,
      };
    });
  };
  const handleButton = () => {
    setForm(console.log(form))
  };


  return {
    valueInput: handleInput,
    printInput: handleButton,
  };
  }