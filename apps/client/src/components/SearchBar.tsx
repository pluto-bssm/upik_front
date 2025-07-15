"use client";

import{
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon
}from "@/app/style/SearchBar"

export default function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
    return (
       <Container>
        <SearchWrapper>
          <SearchInput 
            type="text" 
            placeholder="가이드 검색창"
            onChange={e => onSearch(e.target.value)}
          />
          <SearchIcon size={20} />
        </SearchWrapper>
       </Container>
    );
}
