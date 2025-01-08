import artistData from "@/data/artist";
import Image from "next/image";
import styled from "styled-components";
import ArtistItem from "./ArtistItem";
import { useRouter } from "next/navigation";

const ArtistList = ({ onClick }) => {
  const router = useRouter();

  return (
    <StyledArtistList>
      <Wrapper onClick={onClick}>
        <Image src={"/arrow2.svg"} width={24} height={24} alt="arrow" />
        <Title>NewJeans와 비슷한 아티스트</Title>
      </Wrapper>
      <SongList>
        {artistData.map((artist) => (
          <ArtistItem
            key={artist.id}
            onClick={() => {
              router.push("/main/artist/" + artist.id);
            }}
            imgSrc={"/" + artist.name + ".svg"}
            name={artist.name}
          />
        ))}
      </SongList>
      <SongList>
        {artistData.map((artist) => (
          <ArtistItem
            key={artist.id}
            onClick={() => {
              router.push("/main/artist/" + artist.id);
            }}
            imgSrc={"/" + artist.name + ".svg"}
            name={artist.name}
          />
        ))}
      </SongList>
    </StyledArtistList>
  );
};

export default ArtistList;

const StyledArtistList = styled.div`
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
  gap: 12px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const SongList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 36px;
`;
