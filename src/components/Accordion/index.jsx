import React from 'react';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StyledAccordion } from './accordion.styled';
import { BoldText } from '../../pages/companies/companies.styled';

const Accordion = ({ className = '', title, children, ...props }) => {
  return (
    <StyledAccordion className={`accordion-wrapper ${className}`} {...props}>
      <AccordionSummary className="accordion-title" expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <BoldText>{title}</BoldText>
      </AccordionSummary>
      <AccordionDetails className="accordion-content">{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
