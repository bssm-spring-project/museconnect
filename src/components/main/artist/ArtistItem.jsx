import Image from "next/image";
import styled from "styled-components";

const ArtistItem = ({ imgSrc, name, onClick }) => {
  return (
    <StyledArtistItem onClick={onClick}>
      <StyledImage src={imgSrc} alt="artist" width={216} height={216} />
      <Artist>{name}</Artist>
    </StyledArtistItem>
  );
};

export default ArtistItem;

const StyledArtistItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 216px;
  height: 249px;
  margin-bottom: 4px;
`;

const StyledImage = styled(Image)`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 4px;
`;

const Artist = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #232324;
  line-height: 160%;
  letter-spacing: -0.15px;
`;
