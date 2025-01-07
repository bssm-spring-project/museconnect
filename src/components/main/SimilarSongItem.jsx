import Image from "next/image";
import styled from "styled-components";

const SimilarSongItem = ({ imgSrc, title, artist }) => {
  return (
    <StyledSimilarSongItem>
      <Image src={imgSrc} alt="song" width={216} height={216} />
      <Wrapper>
        <InformationWrapper>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
        </InformationWrapper>
        <Image src={"IconHeart.svg"} width={24} height={24} alt="heart" />
      </Wrapper>
    </StyledSimilarSongItem>
  );
};

export default SimilarSongItem;

const StyledSimilarSongItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 216px;
  height: 266px;
  margin-bottom: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #232324;
  line-height: 160%;
  letter-spacing: -0.15px;
`;

const Artist = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #68686c;
`;
