import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: ${(props) => props.theme.spacing(4)}; //16px
  border-bottom: ${(props) => props.theme.borders.normal} black;
`;
