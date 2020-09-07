import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListIemText from '@material-ui/core/ListItemText';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from  '@material-ui/icons/Edit';
import Axios from "axios";
 


export const Review = ({formData, navigation}) => {
  const { go } = navigation;
  

  const {
      email,
      password,
      // confirmPassword,
      firstname,
      lastname,
      username,
      // address,
      // city,
      // phoneNumber,
  } = formData;

const handleSubmit = (e) => {
  // e.preventDefault()
  console.log(formData)

  Axios.post('http://127.0.0.1:8000/api/signup/', 
    formData
)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}


  return (
    < Container maxWidth = 'xs'
    className = "br3 ba b--black-10 mv8 w-100 w-50-m w-25-l mw6 shadow-8 center" >
         <h2>Review</h2>
         <RenderAccordion summary="Register" go={ go } details ={[
           { 'First name': firstname },
           { 'Last name': lastname },
           { 'Email': email },
           { 'Password': password },
           { 'username': username },
          //  { 'Confirm Password': confirmPassword },

           ]} />

           {/* <RenderAccordion summary="Address" go={ go } details ={[
           { 'Address': address },
           { 'City': city },
           { 'Phone Number': phoneNumber },
        
      
           ]} /> */}

           <div>
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
                style={{marginTop: '1.5rem'}}
                 onClick={() => handleSubmit()}
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
