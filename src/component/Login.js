import React, { useState } from "react";
import { LoginButton } from "../styles/styles";
import { Modal, Form } from "react-bootstrap";

const Login = ({ validate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const validate = () => setLoggedIn(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "Admin" && email === "admin@admin.com" && password === "12345")
      validate();
    else {
      alert("False");
    }
  };

  return (
    <>
      <LoginButton onClick={handleShow} style={{ backgroundColor: "#1C253F" }}>
        Login
      </LoginButton>
      <Modal show={show} backdrop="static" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Admin Login</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Input the correct details to proceed</Modal.Body>
        <div className="container">
          <Form.Floating className="mt-2">
            <Form.Control
              id="floatingInputCustom"
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="floatingInputCustom">Name</label>
          </Form.Floating>
          <Form.Floating className="mt-4">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating className="mt-4">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              vaue={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </div>
        <Modal.Footer className="mt-4">
          <LoginButton
            style={{ backgroundColor: "#000" }}
            onClick={handleSubmit}
          >
            Submit
          </LoginButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
