import React from 'react';
import { CloseIcon, ItemContent, ItemWrapper } from './clearable_item.styled';
import IconButton from '@material-ui/core/IconButton';

const ClearableItem = ({ className, id, onClear, children, ...props }) => {
  return (
    <ItemWrapper className={className} {...props}>
      <ItemContent>{children}</ItemContent>
      <IconButton onClick={() => onClear(id)}>
        <CloseIcon className="icon-clear" />
      </IconButton>
    </ItemWrapper>
  );
};

export default ClearableItem;
