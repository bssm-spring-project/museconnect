import songData from "@/data/song";
import Image from "next/image";
import styled from "styled-components";
import SimilarSongItem from "./SimilarSongItem";

const SimilarSongList = () => {
  return (
    <StyledSimilarSongList>
      <Wrapper>
        <Title>Right Now와 비슷한 노래</Title>
        <Image src={"IconArrow.svg"} width={24} height={24} alt="arrow" />
      </Wrapper>
      <SongList>
        {songData.map((song) => (
          <SimilarSongItem
            key={song.id}
            imgSrc={song.title + ".svg"}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </SongList>
    </StyledSimilarSongList>
  );
};

export default SimilarSongList;

const StyledSimilarSongList = styled.div`
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
  gap: 4px;
  margin-bottom: 8px;
`;

const SongList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;
