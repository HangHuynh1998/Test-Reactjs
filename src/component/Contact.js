import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import classes from "../style/Modal.module.css"
const Contact = ({contact, showContactDetail, onCloseContact}) => {
    return(
    <Modal show={showContactDetail} size="lg" backdrop="static" centered onHide={onCloseContact}>
            <Modal.Header>
              <Modal.Title>Contact Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                  <p><strong>id:</strong> 1</p>
                  <p><strong>Full name:</strong> ABC XYZ</p>
                  <p><strong>email:</strong> test1@test</p>
                  <p><strong>Phone number:</strong>0123456789</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              <Button variant="secondary" className={classes.ButtonC} onClick={onCloseContact}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        
    );
};

export default Contact;