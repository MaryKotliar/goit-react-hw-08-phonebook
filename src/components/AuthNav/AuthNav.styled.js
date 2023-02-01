import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-family: Roboto, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 700;
  color: white;
  &.active {
    color: coral;
  }
`;
