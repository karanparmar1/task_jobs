import MuiAccordion from '@material-ui/core/Accordion';
import styled from 'styled-components';

export const StyledAccordion = styled(MuiAccordion)`
  box-shadow: none !important;
  &:before {
    display: none;
  }

  .accordion-title {
    padding-left: 0;
  }

  .accordion-content {
    flex-direction: column;
  }
`;
