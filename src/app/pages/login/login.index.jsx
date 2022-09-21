import React from "react";
import styled from "styled-components";

import { useLoginHook } from "./login.hook";
import LoginModal from "./components/login-modal.component";
import RedirectModal from "./components/redirect-modal.component";

const LoginPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(238, 238, 238, 0.5);
`;
const Login = () => {
  const {
    user,
    userInfo,
    handleUserInput,
    submit,
    navigateToRegister,
    redirectToDashboard,
  } = useLoginHook();

  return (
    <>
      {user?.id !== undefined ? (
        <LoginPageContainer>
          <RedirectModal onRedirect={redirectToDashboard} />
        </LoginPageContainer>
      ) : (
        <LoginPageContainer>
          <LoginModal
            toRegister={navigateToRegister}
            userInfo={userInfo}
            handleInput={handleUserInput}
            submit={submit}
          />
        </LoginPageContainer>
      )}
    </>
  );
};

export default Login;
