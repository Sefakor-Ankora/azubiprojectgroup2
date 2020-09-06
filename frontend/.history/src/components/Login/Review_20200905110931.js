import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListIemText from '@material-ui/core/ListItemText';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from  '@material-ui/icons/Edit';


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
    <Container maxWidth='xs'>
         <h3>Review</h3>
         <RenderAccordion summary="Register" details ={[
           { 'First Name': firstName },
           { 'Last Name': lastName },
           { 'Email': email },
           { 'Password': password },
           { 'Confirm Password': confirmPassword },

           ]} />

           <RenderAccordion summary="Address" details ={[
           { 'Address': address },
           { 'City': city },
           { 'Phone Number': phoneNumber },
      

           ]} />

           <div>
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
                margin=
                // onClick={() => navigation.next()}
              />
           </div>


    </Container>
   
  
  );
}

export const RenderAccordion = ({ summary, details }) => (
  <Accordion>
    < AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    > {  summary }</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data,index) => {
          const objKey = Object.keys(data)[0]
          const objValue = data[Object.keys(data)[0]];

        return <ListIemText>{`${objKey}: ${objValue}`}</ListIemText>

        }) }
        <IconButton
        color='primary'
        component='span'
        >
          <EditIcon/>
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)

export default Review;
