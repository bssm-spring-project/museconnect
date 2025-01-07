import Image from "next/image";
import styled from "styled-components";

const HeaderItem = ({ title, icon, activeIcon, isActive, onClick }) => {
  return (
    <StyledHeaderItem isActive={isActive} onClick={onClick}>
      <Wrapper>
        <Text isActive={isActive}>{title}</Text>
        <Image
          src={isActive ? activeIcon : icon}
          alt="ico."
          width={24}
          height={24}
        />
      </Wrapper>
    </StyledHeaderItem>
  );
};

export default HeaderItem;

const StyledHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 156px;
  height: 52px;
  padding: 18px;
  border-right: ${({ isActive }) => (isActive ? "4px solid #0da573" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ isActive }) => (isActive ? "#0DA573" : "#babbc2")};
  padding-top: 3px;
`;
