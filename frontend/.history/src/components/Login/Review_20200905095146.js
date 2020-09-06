import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/ AccordionDetails';
import ListIemText from '@material-ui/core/ListItemText';

export const Review = ({formData}) => {
  const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      address,
      city,
      phoneNumber,
  } = formData;
  return (
    <Container>
         <h3>Review</h3>
         <RenderAccordion summary="register" details ={[
           { 'firstName': firstName },
           { 'lastName': lastName },
           { 'email': email },
           { 'password': password },
           { 'confirmPassword': confirmPassword },

           ]} />
    </Container>
   
  
  );
}

export const RenderAccordion = ({ summary, details }) => (
  <Accordion>
    <AccordionSummary>{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map(( data,index) => {
          const objKey = Object.keys
        }) }
      </div>
    </AccordionDetail>
  </Accordion>
)

export default Review;
