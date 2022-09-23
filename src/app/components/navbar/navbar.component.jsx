import React from "react";
import styled from "styled-components";

import ChaseLogo from "../../../assets/logo/chase.logo";

const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 2rem;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
`;

const NavLogo = styled.div`
  cursor: pointer;
`;

const NavItemContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const NavItem = styled.button`
  font-family: "Oxygen Regular";
  font-size: 0.8rem;
  padding: 0.5em 1.5em;

  border: none;
  border-radius: 12px;

  cursor: pointer;
  transition: 300ms ease-in-out;
  ${({ bordered }) => {
    switch (bordered) {
      case true:
        return `background-color: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); &:hover{ background-color: var(--primary-color); color: #fff; }`;
      case false:
        return `background-color: var(--primary-color); color: #fff; &:hover{ border: 1px solid var(--primary color); background-color: transparent; color: var(--primary-color); }`;
      default:
        return "";
    }
  }}
`;

const NavbarComponent = ({ user, onLogIn, onRegister }) => {
  return (
    <NavbarContainer>
      <Navbar>
        <NavLogo>
          <ChaseLogo />
        </NavLogo>
        <NavItemContainer>
          <NavItem data-navigatetype="login" bordered={true} onClick={onLogIn}>
            Log in
          </NavItem>
          <NavItem
            data-navigatetype="register"
            bordered={false}
            onClick={onRegister}
          >
            Register
          </NavItem>
        </NavItemContainer>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavbarComponent;
