import React from "react";
import styled from "styled-components";

import {
  LoginContainer,
  Login,
  LoginForm,
  LoginInput,
  LoginButton,
} from "../../login/components/login-modal.component";

const RegisterContainer = styled(LoginContainer)`
  animation: fadein 350ms linear forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Register = styled(Login)``;
const RegisterForm = styled(LoginForm)``;
const RegisterInput = styled(LoginInput)``;
const RegisterButton = styled(LoginButton)``;

const RegisterModal = ({ userInfo, handleInput, submit }) => {
  return (
    <RegisterContainer>
      <Register>
        <h1>Register</h1>
        <RegisterForm onSubmit={submit}>
          <RegisterInput
            name="username"
            type="text"
            placeholder="Enter username"
            value={userInfo.username}
            onChange={handleInput}
          />
          <RegisterInput
            name="password"
            type="password"
            placeholder="Enter password"
            value={userInfo.password}
            onChange={handleInput}
          />
          <RegisterButton>Register</RegisterButton>
        </RegisterForm>
      </Register>
    </RegisterContainer>
  );
};

export default RegisterModal;
