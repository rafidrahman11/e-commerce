import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #ffffff;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 5px 6px #ddd;
`;

export const NavLogo = styled.img`
  height: 50px;
  object-fit: contain;
  padding: 30px;
`;

export const NavRight = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavMenuItems = styled(Link)`
  font-size: 18px;
  color: grey;
  padding: 15px;
  text-decoration: none;
`;
