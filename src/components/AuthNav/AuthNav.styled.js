import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 700;
`;

export const Item = styled.li`
  &:first-child {
    margin-right: 10px;
  }
`;
