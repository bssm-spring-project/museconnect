import Image from "next/image";
import styled from "styled-components";

const SpotifyButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Image alt="logo" src={"spotify.svg"} width={102.36} height={28} />
    </StyledButton>
  );
};

export default SpotifyButton;

const StyledButton = styled.div`
  margin-top: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 462px;
  height: 48px;
  background-color: #1cd760;
  border-radius: 8px;
  cursor: pointer;
`;
