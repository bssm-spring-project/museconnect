import styled from "styled-components";

const AlbumDetailTab = () => {
  return (
    <StyledAlbumDetailTab>
      <Container>
        <Align>
          <Title>앨범명</Title>
          <Content>네모네모</Content>
        </Align>
        <Align>
          <Title>아티스트</Title>
          <Content>YENA (최예나)</Content>
        </Align>
        <Align>
          <Title>유통사</Title>
          <Content>(주)지니뮤직</Content>
        </Align>
        <Align>
          <Title>기획사</Title>
          <Content>위에화엔터테인먼트코리아 </Content>
        </Align>
        <저작권>Ⓒ 2024 YUEHUA ENTERTAINMENT KOREA</저작권>
        <저작권>Ⓒ 2024 YUEHUA ENTERTAINMENT KOREA</저작권>
      </Container>
      <Introduce>
        <Title>앨범 소개</Title>
        <Content>
          어쩌면 사랑은 네모인가 봐!
          <br />
          <br />
          둥근 지구, 둥근 하트, 그 속에서 둥글게 모여 사랑하는 사람들
          <br />
          분명 같은 세상에 살고 있는데
          <br />
          우리 사랑은 왜 이리 삐뚤빼뚤 뾰족하고 네모난 걸까?
          <br />
          <br />
          별것 아닌 일에도 블록처럼 딱 맞아떨어지는 순간엔
          <br />
          서로가 너무 좋아 떨어지기 싫다가도
          <br />
          별것도 아닌 일로 뾰족한 모서리로 날 세우며
          <br />
          서로에게 상처 내고, 싸우고
          <br />
          <br />
          어쩌면 사랑은 달콤하지만 각진,
          <br />
          그래서 언젠가 분명 나를 아프게 만들지도 모를
          <br />저 네모난 각설탕을 닮은 게 아닐까?
          <br />
          그렇다면 내가! 너의 좋은 점도, 모난 점도 전부 삼켜줄게!
          <br />
          무엇이 되었든, 그것도 사랑이었다고 후회 없이 말할 수 있도록!
        </Content>
      </Introduce>
    </StyledAlbumDetailTab>
  );
};

export default AlbumDetailTab;

const StyledAlbumDetailTab = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const Title = styled.div`
  color: #0e0f0f;
  font-size: 18px;
  font-weight: 500;
`;

const Content = styled.div`
  color: #454648;
  font-size: 16px;
  font-weight: 400;
`;

const 저작권 = styled.div`
  color: #0e0f0f;
  font-size: 16px;
  font-weight: 400;
`;

const Introduce = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 114px;
`;
