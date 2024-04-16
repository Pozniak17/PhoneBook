import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;

  > li {
    margin-right: ${(props) => props.theme.spacing(3)}; //12px

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const Logo = styled.p`
  color: white;
  font-weight: ${(props) => props.theme.fontWeights.extra}; //800
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${(props) => props.theme.radii.normal};
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.bold}; //700

  &.active {
    color: ${(props) => props.theme.colors.white};
    background-color: #9c27b0;
  }
`;
