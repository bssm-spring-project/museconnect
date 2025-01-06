import styled from "styled-components";

const LoginButton = ({ onClick }) => {
  return (
    <StyledSignUpButton>
      이미 회원이신가요?
      <SignUp onClick={onClick}>로그인</SignUp>
    </StyledSignUpButton>
  );
};

export default LoginButton;

const StyledSignUpButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  color: #232324;
  gap: 12px;
`;

const SignUp = styled.div`
  color: #0da573;
  cursor: pointer;
`;
