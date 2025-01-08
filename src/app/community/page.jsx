"use client";

import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import styled from "styled-components";
import Image from "next/image";

const CommunityPage = () => {
  return (
    <StyledCommunityPage>
      <Header />
      <TopWrapper>
        <SearchBar placeholder={"게시글의 제목, 내용 등을 검색할 수 있습니다."} />
        <StyledProfile>
          <Image src={"/IconPerson.svg"} width={24} height={24} alt="profile" />
        </StyledProfile>
      </TopWrapper>
    </StyledCommunityPage>
  );
};

export default CommunityPage;

const StyledCommunityPage = styled.div`
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
  margin-top: 16px;
  margin-left: 96px;
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
