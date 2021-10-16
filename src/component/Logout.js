import React from "react";
import { LoginButton } from "../styles/styles";

const Logout = ({ unValidate }) => {
  return (
    <LoginButton onClick={unValidate} style={{ backgroundColor: "#f04" }}>
      Logout
    </LoginButton>
  );
};

export default Logout;
