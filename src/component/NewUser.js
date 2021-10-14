import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginButton } from "../styles/styles";

const NewUser = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () =>
    toast.success("User Added Successfully ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e) => {
    if (name !== "") {
      await addDoc(collection(db, "users"), {
        name: name,
        appointment: [],
      });
    } else alert("Try Again");
    handleClose();
    notify();
  };

  return (
    <div>
      <LoginButton onClick={handleShow} style={{ backgroundColor: "#1C253F" }}>
        Add User
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
            <p>Name: {name}</p>
            <label htmlFor="floatingInputCustom">Name</label>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default NewUser;
