import { useState } from "react";
import React from "react";
import {
  Flex,
  HalfWidth,
  LargeText,
  SmallText,
  FormTrigger,
} from "../../styles/styles";
// import { Modal } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";

const Home = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [name, setName] = useState();
  const [dateValue, setDateValue] = useState([]);
  const [timeValue, setTimeValue] = useState([]);

  // let dateValue = new Date("11/10/21");
  let minDate = new Date("15/10/2021");
  let maxDate = new Date("19/10/2021");
  // const nameValue = new Date("02/05/97s 10:30AM");

  return (
    <Flex>
      <HalfWidth>
        <LargeText>Schedule Appointments in few clicks</LargeText>
        <SmallText>
          MeetMe helps you schedule meeting with your contacts in less than a
          minute
        </SmallText>
        {/* <FormTrigger onClick={handleShow}>Schedule Meeting Now</FormTrigger>
        <Modal show={show} backdrop="static" onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <b>Schedule Meeting</b>
            </Modal.Title>
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
        </Modal> */}
      </HalfWidth>
      <HalfWidth>
        <Fade bottom delay={1000}>
          <div className="form-container">
            <h3>
              <b>Setup Appointment</b>
            </h3>
            <p>Input a registered name then proceed to select date and time</p>
            <form className="mt-5">
              <p>
                <b>Name</b>
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="input-field"
                placeholder="Your Name"
              />
              <p>{name}</p>
              <p className="mt-3">
                <b>Select Date</b>
              </p>
              <DatePickerComponent
                id="datepicker"
                placeholder="Enter date"
                min={minDate}
                max={maxDate}
                value={dateValue}
                onChange={(e) => {
                  setDateValue(e.target.value);
                }}
              />
              <p>{dateValue}</p>

              <p className="mt-3">
                <b>Select Time</b>
              </p>
              <TimePickerComponent
                id="timepicker"
                value={timeValue}
                step={60}
                format={"HH:mm"}
                onChange={(e) => {
                  setTimeValue(e.target.value);
                }}
              />
              <FormTrigger
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#f94144" }}
              >
                Submit
              </FormTrigger>
            </form>
          </div>
        </Fade>
      </HalfWidth>
    </Flex>
  );
};

export default Home;
