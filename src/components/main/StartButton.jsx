import styled from "styled-components";

const StartButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>시작하기</StyledButton>;
};

export default StartButton;

const StyledButton = styled.div`
  margin-top: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 462px;
  height: 48px;
  background-color: #0da573;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
`;
