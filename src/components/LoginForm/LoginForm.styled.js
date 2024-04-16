import { Form } from "formik";
import styled from "styled-components";

export const FormWrapper = styled(Form)`
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
