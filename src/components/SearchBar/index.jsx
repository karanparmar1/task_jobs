import React from 'react';
import { SearchBarWrapper } from './searchbar.styled';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ className, ...props }) => {
  return (
    <SearchBarWrapper className="searchbar">
      <SearchIcon className="icon-search" />
      <input className={`input-search ${className}`} {...props} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
