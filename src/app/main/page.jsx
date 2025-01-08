"use client";

import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import SimilarArtistList from "@/components/main/SimilarArtistList";
import SimilarSongList from "@/components/main/SimilarSongList";
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/navigation";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
  }
`;

const MainPage = () => {
  const router = useRouter();

  return (
    <>
      <GlobalStyles />
      <StyledMainPage>
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
          <SimilarSongList
            onClick={() => {
              router.push("/main/song");
            }}
          />
          <SimilarArtistList
            onClick={() => {
              router.push("/main/artist");
            }}
          />
        </ContentWrapper>
      </StyledMainPage>
      <FooterWrapper>
        <Image
          src={"footer.svg"}
          alt="footer"
          layout="responsive"
          width={1000}
          height={236}
          style={{ width: "100%", height: "auto" }}
        />
      </FooterWrapper>
    </>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fbfbfc;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1136px;
  margin-top: 16px;
  margin-left: 50px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1092px;
  height: 40px;
  margin-left: 46px;
  margin-bottom: 40px;
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
