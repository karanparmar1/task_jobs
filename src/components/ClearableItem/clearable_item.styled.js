import styled from 'styled-components';
import MuiCloseIcon from '@material-ui/icons/Close';

export const ItemWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  min-height: 36px;
  margin: 6px 0;
  line-break: anywhere;
  background: rgba(221, 244, 255, 0.4);
  color: rgb(38, 147, 196);
`;

export const ItemContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 12px;
`;

export const CloseIcon = styled(MuiCloseIcon)`
  path {
    fill: rgb(38, 147, 196);
  }
`;
