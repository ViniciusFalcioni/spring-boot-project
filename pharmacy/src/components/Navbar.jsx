import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #613F9D;
  padding: 10px;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Estoque</NavLink>
      <NavLink to="/cadastro-remedio">Cadastrar Remédios</NavLink>
    </Nav>
  );
};

export default Navbar;
