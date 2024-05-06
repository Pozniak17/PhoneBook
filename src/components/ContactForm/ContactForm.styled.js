import { styled } from "styled-components";

export const FormContainer = styled.form`
  margin: 0 auto;
  width: 400px;
  border-radius: 8px;
  border: 2px solid #9200ab;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: ${(props) => props.theme.spacing(3)}; //15px
  margin-bottom: ${(props) => props.theme.spacing(3)}; //15px
  padding: 12px;

  box-shadow: ${(props) => props.theme.shadows.standart};
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin-bottom: ${(props) => props.theme.spacing(3)}; //15px
  width: 200px;
  border: ${(props) => props.theme.borders.normal} gray;
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
