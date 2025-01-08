import styled from "styled-components";

const Button = ({ children, onClick, isSelected }) => {
  return (
    <StyledButton onClick={onClick} isSelected={isSelected}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected ? "#0da573" : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "#BABBC2")};
  font-size: 18px;
  font-weight: 500;
  border-radius: 100px;
  padding: 8px 16px;
  cursor: pointer;
`;
