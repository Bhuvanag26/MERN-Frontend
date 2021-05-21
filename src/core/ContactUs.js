import React, { useEffect, useState } from 'react'
import { API } from '../backend';
import "../styles.css"
import Base from "./Base"
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { BsClock} from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import img6 from '../images/call.png'



import Social from '../Social/Social';





const ContactUs = () => {
    return (
        <Base title="Contact Us" description="">
          

            
        <div className="container-fluid">
            <div className="row text-center">
              <div className="col-4">
              <img src={img6} height="450" width="600" style={{borderRadius : "50%" , marginTop:"-150px" }} />

              </div>
              <div className="col-8" style={{textAlign : "right"}}>
        
        <p style={{color:"#e76f51", fontSize : "25px" , textAlign:"right" }}>
    For any query or product related issues,<br />
    Do contact us on the below details<br />
   < AiOutlineMail /> : bhuvanagarwal30@gmail.com <br />
   <BiPhone /> : 000000000000000 <br />

     <BsClock /> : Mon to Fri: 09.30 am to 10.00 pm <br/>
                Sat-Sun: 09.30 am to 5.00 pm <br />
    

    </p>
    </div>
    

     </div>
 </div>
 <legend class="legend">
   <span>Write Us</span>
 </legend>

 <div class="field note no-label">Jot us a note and we’ll get back to you as quickly as possible.</div>

           
           
            <Form >
  <Form.Group  controlId="formBasicEmail">
    <Form.Label column sm="2">Email address</Form.Label>
    <Form.Control className="form-controllop"  type="email" placeholder="Enter email" />
  
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label coloumn sm = "2">Phone Number</Form.Label>
  
    <Form.Control className="form-controllop" type="" placeholder="Number" />
    
  </Form.Group>
  <Form.Label>Your Message </Form.Label>
    <Form.Control className="form-controllop" as="textarea" rows={3} />
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button className="button" type="submit">
    Submit
  </Button>
</Form>

 <Social />
 
 


        
            
            
        
    </Base>
)
}


export default ContactUs;
