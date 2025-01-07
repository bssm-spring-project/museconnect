"use client";

import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <StyledHeader>
      <HeaderItem
        title={"홈"}
        icon={"home-default.svg"}
        activeIcon={"home-active.svg"}
        isActive={pathname === "/main"}
        onClick={() => {
          router.push("/main");
        }}
      />
      <HeaderItem
        title={"커뮤니티"}
        icon={"community-default.svg"}
        activeIcon={"community-active.svg"}
        isActive={pathname === "/community"}
        onClick={() => {
          router.push("/community");
        }}
      />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 156px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  left: 0;
  top: 0;
  padding-top: 124px;
`;
