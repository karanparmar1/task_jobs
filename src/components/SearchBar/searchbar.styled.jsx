import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 32px;
  width: 100%;
  padding: 0 4px;
  border: 1px solid #33333340;
  align-items: center;

  .icon-search {
    max-width: 32px;
    path {
      fill: rgb(38, 147, 196) !important;
    }
  }

  .input-search {
    outline: 0 !important;
    border: 0 !important;
    width: calc(100% - 32px);
  }
`;
