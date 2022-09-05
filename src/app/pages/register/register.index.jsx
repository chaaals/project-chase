import React from "react";
import styled from "styled-components";

import { useRegisterHook } from "./register.hook";
import RegisterModal from "./components/register-modal.component";

const RegisterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(238, 238, 238, 0.5);
`;
const Register = () => {
  const { userInfo, handleInput, submit } = useRegisterHook();
  return (
    <RegisterContainer>
      <RegisterModal
        userInfo={userInfo}
        handleInput={handleInput}
        submit={submit}
      />
    </RegisterContainer>
  );
};

export default Register;
