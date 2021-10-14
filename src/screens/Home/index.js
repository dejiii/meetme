import { useState } from "react";
import React from "react";
import {
  Flex,
  HalfWidth,
  LargeText,
  SmallText,
  FormTrigger,
} from "../../styles/styles";
import Modal from "react-bootstrap/Modal";
import Img from "../../img/image.jpeg";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myRef = document.querySelector(".scrollable-div");

  return (
    <Flex>
      <HalfWidth>
        <LargeText>
          Schedule Meeting with your contacts easily and cut out
          <i className="slant-texts">
            {" "}
            <TypeWriterEffect
              cursorColor="#06b2b0"
              typeSpeed={100}
              scrollArea={myRef}
              multiText={["time wastage.", "disappointments.", "accidents."]}
            />
          </i>
        </LargeText>
        <SmallText>
          MeetMe helps you schedule meeting with your contacts with within few
          clicks.
        </SmallText>
        <FormTrigger onClick={handleShow}>Schedule Meeting Now</FormTrigger>
        <Modal show={show} backdrop="static" onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Schedule Meeting</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button variant="primary" onClick={handleClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </HalfWidth>
      <HalfWidth>
        <img src={Img} alt="" className="side-image" />
      </HalfWidth>
    </Flex>
  );
};

export default Home;
