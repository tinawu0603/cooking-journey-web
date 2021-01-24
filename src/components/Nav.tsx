import React, { useState, useEffect } from 'react';
import { H3 } from '../styles/font-styles';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavbarContainer>
      <NavLink to={`/`}>
        <H3 className="text-left">Cooking Journey</H3>
      </NavLink>
    </NavbarContainer>
  );
}

const NavbarContainer = styled(Navbar)`
  border-radius: 10px;
  background-color: rgba(3, 12, 84, 0.8);
  color: white;
  width: 100%;
  padding: 5px 20px;
`;

const NavLink = styled(Link)`
  color: white;
  padding: 0 10px;
  border-radius: 10px;
  border: 5px solid transparent;
  &:hover {
    border: 5px solid white;
    color: white;
    text-decoration: none;
  }
  &:visited, &:active, &:link {
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
