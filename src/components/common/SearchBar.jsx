import Image from "next/image";
import styled from "styled-components";

const SearchBar = ({ placeholder }) => {
  return (
    <StyledSearchBar>
      <Image src="/IconSearch.svg" alt="search icon" width={24} height={24} />
      <SearchInput placeholder={placeholder} />
    </StyledSearchBar>
  );
};

export default SearchBar;

const StyledSearchBar = styled.div`
  width: 100%;
  max-width: 648px;
  height: 40px;
  background-color: #f1f1f3;
  border-radius: 100px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: black;
  font-weight: 400;

  &::placeholder {
    color: #babbc2;
  }
`;
