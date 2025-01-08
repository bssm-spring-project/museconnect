import songData from "@/data/song";
import Image from "next/image";
import styled from "styled-components";
import SongItem from "./SongItem";
import { useRouter } from "next/navigation";

const SongList = ({ onClick }) => {
  const router = useRouter();

  return (
    <StyledSongList>
      <Wrapper onClick={onClick}>
        <Image src={"/arrow2.svg"} width={24} height={24} alt="arrow" />
        <Title>Right Now와 비슷한 노래</Title>
      </Wrapper>
      <SongListWrapper>
        {songData.map((song) => (
          <SongItem
            key={song.id}
            onClick={() => {
              router.push("/main/song/" + song.id);
            }}
            imgSrc={"/" + song.title + ".svg"}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </SongListWrapper>
      <SongListWrapper>
        {songData.map((song) => (
          <SongItem
            key={song.id}
            onClick={() => {
              router.push("/main/song/" + song.id);
            }}
            imgSrc={"/" + song.title + ".svg"}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </SongListWrapper>
    </StyledSongList>
  );
};

export default SongList;

const StyledSongList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1136px;
  height: 302px;
  margin-bottom: 46px;
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
  cursor: pointer;
`;

const SongListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 36px;
`;
