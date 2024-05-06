import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const UserText = styled.p`
  color: white;
  margin-right: 10px;
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
