import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import ChaseLogo from "../../../../assets/logo/chase.logo";

const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 100vh;

  padding: 2rem;
  background-color: rgb(238, 238, 238);
`;

const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  flex-direction: column;
  margin-top: 25px;

  hr {
    width: 100%;
  }
`;

const SidebarItemContainer = styled.nav`
  width: 100%;
  height: 85%;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-family: "Oxygen Bold";
  font-size: 1.25rem;

  background-color: transparent;
  color: var(--secondary-color);

  transition: 300ms ease-in-out;
  border: none;
`;

const Username = styled.p`
  font-size: 1.25rem;
  font-family: "Oxygen Regular";
  align-self: flex-start;

  color: var(--primary-color);
`;

const LogoutButton = styled.button`
  align-self: end;

  font-family: "Oxygen Regular";
  font-size: 0.85rem;

  color: var(--secondary-color);
  background-color: transparent;

  cursor: pointer;
  border: none;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--primary-color);
  opacity: 0.5;
`;

const ProjectSidebar = ({ username = "chaaals" }) => {
  return (
    <SidebarContainer>
      <ChaseLogo />
      <Sidebar>
        <Username>
          Welcome to your dashboard, <strong>{username}</strong>
        </Username>
        <Divider />
        <SidebarItemContainer>
          <SidebarItem>
            Projects <FontAwesomeIcon icon={faAnglesRight} />
          </SidebarItem>
        </SidebarItemContainer>
        <LogoutButton>
          Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </LogoutButton>
      </Sidebar>
    </SidebarContainer>
  );
};

export default ProjectSidebar;
