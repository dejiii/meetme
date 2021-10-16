import React from "react";
import { LoginButton } from "../styles/styles";

const Logout = ({ unValidate }) => {
  return <LoginButton onClick={unValidate}>Logout</LoginButton>;
};

export default Logout;
