import React, { useState } from 'react';
import { Modal} from "react-bootstrap";
import CustomScrollbars from './CustomScrollbars';
import Contact from './Contact';
import ContactModal from './ContactModal';
const Contacts = ({selectActiveContact,showContacts}) => {
    return (
        <ContactModal title="All Contact" show={showContacts}>
          <CustomScrollbars style={{height: 300}}>
            <div className="d-flex" onClick={selectActiveContact} style={{cursor:"pointer"}}>
                <p className="mr-3">1</p>
                <p className="mr-3"><strong>ABC XYZ</strong></p>
                <p className="mr-3">test1@test</p>
                <p>0123456789</p>
            </div> 
            <div  className="d-flex" >
                <p className="mr-3">2</p>
                <p className="mr-3"><strong>ABCD XYZ</strong></p>
                <p className="mr-3">test2@test</p>
                <p>0123456789</p>
            </div> 
            <div  className="d-flex" >
                <p className="mr-3">3</p>
                <p className="mr-3"><strong>ABCE XYZ</strong></p>
                <p className="mr-3">test3@test</p>
                <p>0123456789</p>
            </div> 
          </CustomScrollbars>
          </ContactModal>
    );
};

export default Contacts;