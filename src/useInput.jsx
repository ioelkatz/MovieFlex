import { useState } from "react";

export default function useInput(initialValue) {
  const [myValue, setMyValue] = useState(initialValue);

  function handleChange(event) {
    setMyValue(event.target.value);
  }

  const listenInput = {
    value: myValue,
    onChange: handleChange,
  };

  return listenInput;
}
