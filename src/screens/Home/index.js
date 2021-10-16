import { useState } from "react";
import React from "react";
import {
  Flex,
  HalfWidth,
  LargeText,
  SmallText,
  FormTrigger,
} from "../../styles/styles";
import Fade from "react-reveal/Fade";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [name, setName] = useState();
  const [dateValue, setDateValue] = useState();
  const [timeValue, setTimeValue] = useState();

  let minDate = new Date("15/10/2021");
  let maxDate = new Date("19/10/2021");

  const notify = () =>
    toast.error("User not recognised!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const retry = () =>
    toast.error("Fill all filed before submitting!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && dateValue && timeValue) {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 0) {
          // await addDoc(collection(db, "users"), {
          //   name,
          //   appointment: [],
          // });
          // alert("added");
        } else {
          notify();
        }
      } catch (error) {
        console.log(error);
      }
    } else retry();
  };

  return (
    <>
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
              <p>
                Input a registered name then proceed to select date and time
              </p>
              <form className="mt-5" onSubmit={handleSubmit}>
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
                {/* <p>{new Date(dateValue).toLocaleDateString()}</p> */}

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
    </>
  );
};

export default Home;
