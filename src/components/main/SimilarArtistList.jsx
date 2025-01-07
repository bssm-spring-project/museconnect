import artistData from "@/data/artist";
import Image from "next/image";
import styled from "styled-components";
import SimilarArtistItem from "./SimilarArtistItem";

const SimilarArtistList = () => {
  return (
    <StyledSimilarArtistList>
      <Wrapper>
        <Title>NewJeans와 비슷한 아티스트</Title>
        <Image src={"IconArrow.svg"} width={24} height={24} alt="arrow" />
      </Wrapper>
      <SongList>
        {artistData.map((artist) => (
          <SimilarArtistItem
            key={artist.id}
            imgSrc={artist.name + ".svg"}
            name={artist.name}
          />
        ))}
      </SongList>
    </StyledSimilarArtistList>
  );
};

export default SimilarArtistList;

const StyledSimilarArtistList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1136px;
  height: 302px;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #0e0f0f;
  font-size: 20px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  margin-bottom: 8px;
`;

const SongList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;
