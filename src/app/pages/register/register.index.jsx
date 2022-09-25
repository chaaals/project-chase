import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { useRegisterHook } from "./register.hook";

import { ExitModal } from "../login/components/login-modal.component";
import RegisterModal from "./components/register-modal.component";

const RegisterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(235, 235, 235, 0.9);
  position: fixed;
  top: 0;
  left: 0;
`;

const Register = () => {
  const { userInfo, handleUserInput, submit, exitModal } = useRegisterHook();
  return (
    <RegisterContainer>
      <ExitModal onClick={exitModal}>
        <FontAwesomeIcon icon={faX} />
      </ExitModal>
      <RegisterModal
        userInfo={userInfo}
        handleInput={handleUserInput}
        submit={submit}
      />
    </RegisterContainer>
  );
};

export default Register;
