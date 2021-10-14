import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  background-color: "brown";
`;

export const Logo = styled.h1`
  font-size: 2em;
  font-family: "Patrick Hand", cursive !important;
  font-weight: bold;
`;

export const LoginButton = styled.button`
  background-color: #7b28ce;
  color: #fff;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 10px;
  border: 0;

  :hover {
    opacity: 0.6 !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const HalfWidth = styled.div`
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const LargeText = styled.p`
  font-weight: bold;
  max-width: 500px;
  font-size: 45px;
  line-height: 1.3em;
  margin-top: 3.5em;
  color: #000;

  @media screen and (max-width: 600px) {
    margin-top: 2em;
  }
`;

export const SmallText = styled.p`
  font-size: 1.5em;
  max-width: 400px;
`;

export const FormTrigger = styled.button`
  background-color: #06b2b0;
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 10px;
  border: 0;
`;

export const Head = styled.p`
  font-weight: bold;
  max-width: 500px;
  font-size: 45px;
  line-height: 1.3em;
  color: #000;
`;
