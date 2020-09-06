import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/ AccordionDetails';

export const Review = () => {
  const {  } = form
  return (
    <Container>
         <h3>Review</h3>
         <RenderAccordion summary="register" />
    </Container>
   
  
  );
}

export const RenderAccordion = ({ summary }) => {
  <Accordion>
    <AccordionSummary>{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        
      </div>
    </AccordionDetail>
  </Accordion>
}

