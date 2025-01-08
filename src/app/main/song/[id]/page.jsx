"use client";

import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/main/song/[id]/Button";
import { useState } from "react";
import SongDetailTab from "@/components/main/song/[id]/SongDetailTab";
import AlbumDetailTab from "@/components/main/song/[id]/AlbumDetailTab";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
  }
`;

const SongDetailPage = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("song");

  return (
    <>
      <GlobalStyles />
      <AllContainer>
        <StyledSongDetailPage>
          <Header />
          <ContentWrapper>
            <TopWrapper>
              <SearchBar
                placeholder={"아티스트 이름, 곡명을 검색할 수 있습니다."}
              />
              <StyledProfile>
                <Image
                  src={"/IconPerson.svg"}
                  width={24}
                  height={24}
                  alt="profile"
                />
              </StyledProfile>
            </TopWrapper>
            <Container>
              <Image
                src={"/arrow2.svg"}
                width={24}
                height={24}
                alt="arrow"
                onClick={() => {
                  router.back();
                }}
              />
              <SongCover>
                <Image
                  src={"/네모네모.svg"}
                  alt="cover"
                  width={276}
                  height={276}
                />
                <Wrapper>
                  <Title>네모네모</Title>
                  <Artist>YENA (최예나)</Artist>
                  <Image
                    src={"/IconHeart.svg"}
                    width={24}
                    height={24}
                    alt="heart"
                  />
                </Wrapper>
              </SongCover>
              <ButtonWrapper>
                <Button
                  isSelected={selectedTab === "song"}
                  onClick={() => setSelectedTab("song")}
                >
                  곡 상세 정보
                </Button>
                <Button
                  isSelected={selectedTab === "album"}
                  onClick={() => setSelectedTab("album")}
                >
                  앨범 상세 정보
                </Button>
              </ButtonWrapper>
              <TabContent>
                {selectedTab === "song" ? (
                  <SongDetailTab />
                ) : (
                  <AlbumDetailTab />
                )}
              </TabContent>
            </Container>
          </ContentWrapper>
        </StyledSongDetailPage>
        <FooterWrapper>
          <Image
            src={"/footer.svg"}
            alt="footer"
            layout="responsive"
            width={1000}
            height={236}
            style={{ width: "100%", height: "auto" }}
          />
        </FooterWrapper>
      </AllContainer>
    </>
  );
};

export default SongDetailPage;

const StyledSongDetailPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fbfbfc;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1092px;
  height: 40px;
  margin-left: 46px;
  margin-bottom: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1136px;
  margin-top: 16px;
  margin-left: 50px;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #f1f1f3;
`;

const FooterWrapper = styled.div`
  width: 100%;
`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SongCover = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  gap: 48px;
  margin-bottom: 28px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.div`
  color: #0e0f0f;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Artist = styled.div`
  color: #0da573;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 152px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const TabContent = styled.div`
  margin-top: 28px;
`;
