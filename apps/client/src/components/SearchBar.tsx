"use client";

import{
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon
}from "@/app/style/SearchBar"

export default function SearchBar(){
    return (
       <Container>
        <SearchWrapper>
          <SearchInput 
            type="text" 
            placeholder="가이드 검색창"
          />
          <SearchIcon size={20} />
        </SearchWrapper>
       </Container>
    );
}
