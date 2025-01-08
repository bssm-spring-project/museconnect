import styled from "styled-components";

const SongDetailTab = () => {
  return (
    <StyledSongDetailTab>
      <Container>
        <Align>
          <Title>곡명</Title>
          <Content>네모네모</Content>
        </Align>
        <Align>
          <Title>작곡</Title>
          <Content>
            네이슨 (NATHAN), 홍훈기 (PRISMFILTER), Ohway!, Kako, Gesture
            (PRISMFILTER), 뷰 (view), Elum, Nmore
          </Content>
        </Align>
        <Align>
          <Title>작사</Title>
          <Content>
            지코 (ZICO), 네이슨 (NATHAN), Roho, Gesture (PRISMFILTER)
          </Content>
        </Align>
        <Align>
          <Title>편곡</Title>
          <Content>
            홍훈기 (PRISMFILTER), 네이슨 (NATHAN), Ohway!, Nmore
          </Content>
        </Align>
      </Container>
      <Song>
        <Title>가사</Title>
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        <br />
        째깍 째깍 둥근 시곈
        <br />
        우리 눈칠 보고
        <br />
        각진 얼음 씹어대며 폰만 보는 너<br />난 또 째릿째릿
        <br />
        <br />
        얄미워 너 정말
        <br />왜 저럴까 진짜?
        <br />
        내가 알던 핑크빛 Romance는
        <br />
        둥근 풍선 같던데
        <br />
        우린 좌 우 앞 뒤 뾰족하다구!
        <br />
        <br />손 내밀면 콕! 하고 찔릴 거야
        <br />
        네모 같은 우리
        <br />
        서로 남 탓하는 건<br />
        (예나 지금이나 그대로)
        <br />
        상처투성이야
        <br />
        이러다 나 죽어
        <br />
        네모나고 모난 우린
        <br />
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        <br />
        (야 가만있어 봐, 이건 뭔데?)
        <br />
        <br />
        "잘 자, 일어났다, 밥 먹었어?" (ㅇㅇ)
        <br />텅 빈 톡에 왜 심술은 잔뜩 가득해
        <br />
        본체만체
        <br />
        잠근 화면같이
        <br />
        우리 사이 정말어두컴컴해
        <br />
        <br />
        얄미워도 살짝
        <br />
        한발 물러설까?
        <br />더 멀어지는 건 싫다구!
        <br />
        <br />손 내밀면 콕! 하고 찔릴 거야
        <br />
        네모 같은 우리
        <br />
        서로 남 탓하는 건<br />
        (예나 지금이나 그대로)
        <br />
        상처투성이야
        <br />
        이러다 나 죽어
        <br />
        네모나고 모난 우린
        <br />
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        <br />
        뒤죽박죽
        <br />
        소란한 내 마음 어떡해야 해요
        <br />
        이랬다저랬다
        <br />
        흔들려봐도
        <br />
        잠깐,
        <br />
        끝내긴
        <br />
        흐음…싫은데?
        <br />
        <br />
        콕! 하고 찔린대도
        <br />
        먼저 손 내밀래
        <br />
        네모나도 널 좋아해
        <br />
        (예나 지금이나 그대로)
        <br />
        둥근 리본처럼
        <br />
        내가 안아줄게
        <br />넌 나의 선물이니까
        <br />
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        <br />한 번 더!
        <br />
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
        <br />
        네모네모 네모네모 Sign
        <br />
        삐뚤빼뚤해 Like
      </Song>
    </StyledSongDetailTab>
  );
};

export default SongDetailTab;

const StyledSongDetailTab = styled.div`
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

const Song = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  gap: 8px;
  color: #454648;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 87px;
`;
