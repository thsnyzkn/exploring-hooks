import React, { useState } from "react";

const Button = () => {
  const [buttonText, setButtonText] = useState("Click me,please!");

  const handleClick = () => {
    setButtonText("Yey,I have been clicked");
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
