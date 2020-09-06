import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListIemText from '@material-ui/core/ListItemText';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from  '@material-ui/icons/Edit';


export const Review = ({formData, navigation}) => {
  const { go } = navigation;

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
    <Container maxWidth='xs' className=>
         <h2>Review</h2>
         <RenderAccordion summary="Register" go={ go } details ={[
           { 'First Name': firstName },
           { 'Last Name': lastName },
           { 'Email': email },
           { 'Password': password },
           { 'Confirm Password': confirmPassword },

           ]} />

           <RenderAccordion summary="Address" go={ go } details ={[
           { 'Address': address },
           { 'City': city },
           { 'Phone Number': phoneNumber },
      

           ]} />

           <div>
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
                style={{marginTop: '1.5rem'}}
                 onClick={() => navigation.next()}
              />
           </div>


    </Container>
   
  
  );
}

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    < AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    > {  summary }</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data,index) => {
          const objKey = Object.keys(data)[0]
          const objValue = data[Object.keys(data)[0]];

        return <ListIemText keys={index} >{`${objKey}: ${objValue}`}</ListIemText>

        }) }
        <IconButton
        color='primary'
        component='span'
        onClick={() => go(`${summary.toLowerCase()}`) }
        >
          <EditIcon/>
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)

export default Review;
