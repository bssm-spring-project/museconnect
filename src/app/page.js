"use client";

import SignUpButton from "@/components/main/SignUpButton";
import StartButton from "@/components/main/StartButton";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <StyledMainPage>
        <Wrapper>
          <StyledStart>시작하기</StyledStart>
          <StyledWelcome>
            <GreenText>뮤즈커넥트</GreenText>에 오신 걸 환영합니다.
          </StyledWelcome>
          <StartButton onClick={() => {}} />
        </Wrapper>
        <SignUpButton />
      </StyledMainPage>
    </>
  );
}

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const StyledStart = styled.div`
  color: #0e0f0f;
  font-size: 28px;
  font-weight: 700;
`;

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: row;
  color: #0e0f0f;
  font-size: 18px;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const GreenText = styled.div`
  color: #0da573;
  font-size: 18px;
  font-weight: 400;
`;
