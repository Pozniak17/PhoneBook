import styled from "styled-components";

export const ContactItem = styled.li`
  width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid #9200ab;
  margin-bottom: ${(props) => props.theme.spacing(2)}; //10px
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.radii.middle}; //8px
  box-shadow: ${(props) => props.theme.shadows.standart};
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

export const Text = styled.span`
  font-weight: 700;
`;

export const Number = styled.span`
  font-style: italic;
`;
