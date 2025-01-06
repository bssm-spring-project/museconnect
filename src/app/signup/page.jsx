"use client";

import SpotifyButton from "@/components/common/SpotifyButton";
import LoginButton from "@/components/main/LoginButton";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const SignupPage = () => {
  const router = useRouter();

  return (
    <StyledSignupPage>
      <Wrapper>
        <StyledStart>회원가입</StyledStart>
        <StyledWelcome>
          <GreenText>Sportify 계정</GreenText>으로 회원가입을 진행해 주세요.
        </StyledWelcome>
        <SpotifyButton
          onClick={() => {
            router.push("/main");
          }}
        />
      </Wrapper>
      <LoginButton
        onClick={() => {
          router.push("/login");
        }}
      />
    </StyledSignupPage>
  );
};

export default SignupPage;

const StyledSignupPage = styled.div`
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
