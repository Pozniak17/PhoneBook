import { Field, Form } from "formik";
import styled from "styled-components";

import image from "../utils/img/12728.jpg";

export const FormWrapper = styled(Form)`
  background-image: url(${image});
  background-size: unset;
  padding: 25px;
  background-color: #11173b30;
  border-radius: 8px;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  box-shadow: rgb(255 255 255 / 30%) 0px 0px 20px 20px;

  display: flex;
  flex-direction: column;

  > label {
    color: white;
  }
`;

export const Input = styled(Field)`
  height: 24px;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  color: white;
  background-color: #9c27b0;
  cursor: pointer;

  padding: 8px 16px;
  border-radius: ${(props) => props.theme.radii.normal};
  text-decoration: none;

  font-weight: ${(props) => props.theme.fontWeights.bold}; //700
  border: none;

  &:hover {
    background-color: #4719bc;
  }
`;
