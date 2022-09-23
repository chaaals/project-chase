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
  gap: 8px;

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

  cursor: pointer;
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
  font-size: 1rem;

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

const ProjectSidebar = ({ username = "chaaals", onLogOut }) => {
  return (
    <SidebarContainer>
      <ChaseLogo align="flex-start" />
      <Sidebar>
        <Username>
          Welcome to your dashboard, <strong>{username}</strong>
        </Username>
        <Divider />
        <SidebarItemContainer>
          <SidebarItem>
            Your Projects <FontAwesomeIcon icon={faAnglesRight} />
          </SidebarItem>
        </SidebarItemContainer>
        <LogoutButton onClick={onLogOut}>
          Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </LogoutButton>
      </Sidebar>
    </SidebarContainer>
  );
};

export default ProjectSidebar;
