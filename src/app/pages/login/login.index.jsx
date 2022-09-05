import React from "react";
import styled from "styled-components";

import { useLoginHook } from "./login.hook";
import LoginModal from "./components/login-modal.component";

const LoginPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(238, 238, 238, 0.5);
`;
const Login = () => {
  const { loggedUser, userInfo, handleInput, submit, navigateToRegister } =
    useLoginHook();

  return (
    <>
      {loggedUser?.id !== undefined ? (
        <div>{JSON.stringify(loggedUser)}</div>
      ) : (
        <LoginPageContainer>
          <LoginModal
            toRegister={navigateToRegister}
            userInfo={userInfo}
            handleInput={handleInput}
            submit={submit}
          />
        </LoginPageContainer>
      )}
    </>
  );
};

export default Login;
