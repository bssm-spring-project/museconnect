import styled from "styled-components";

const SignUpButton = ({ onClick }) => {
  return (
    <StyledSignUpButton>
      계정이 없으신가요?
      <SignUp onClick={onClick}>회원가입</SignUp>
    </StyledSignUpButton>
  );
};

export default SignUpButton;

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
