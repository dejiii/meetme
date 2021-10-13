// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from "react-router-dom";

import {
  BigText,
  Header,
  Logo,
  LoginButton,
  Flex,
  HalfWidth,
  LargeText,
  SmallText,
  FormTrigger,
} from "./styles/styles";

import Img from "./img/pp.png";
// import Modal from "./Modal";

const App = () => {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Header>
          <Logo>
            <img
              src={Img}
              alt=""
              style={{ height: 50, borderRadius: 50, marginRight: 10 }}
            />
            MeetMe<sup>TM</sup>
          </Logo>
          <LoginButton>Login</LoginButton>
          {/* <Modal show={modalShow} onHide={() => setModalShow(false)} /> */}
        </Header>
        <Flex>
          <HalfWidth>
            <BigText>Hii 👋</BigText>
            <LargeText>I'm Abdulazeez.</LargeText>
            <SmallText>Frontend Engineer | Blockchain Enthusiast</SmallText>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              provident sed dolor placeat, voluptate, nostrum deserunt quia,
              atque sapiente rerum dolorem reiciendis excepturi! Iste unde
              expedita adipisci aliquam consectetur explicabo.
            </p> */}
            <FormTrigger onClick={() => alert("Hello")}>
              Schedule Meeting
            </FormTrigger>
          </HalfWidth>
          <HalfWidth>
            <p>Name</p>
            <p>Date and Time</p>
            <p>Submit</p>
          </HalfWidth>
        </Flex>
        <p></p>
      </div>
    </div>
  );
};

export default App;
