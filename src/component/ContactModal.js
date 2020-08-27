import React, { Component } from "react";
import { Modal, Spinner, Button, Form } from "react-bootstrap";
import classes from "../style/Modal.module.css";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

const contactModal =({children,show})=> {
    return (
      <Modal size="lg" backdrop="static" centered show={show} >
        <Modal.Header className="d-flex justify-content-between align-items-center">All ConTact
        <Form>
          <Form.Control type="text" placeholder="Search contacts" />
        </Form>
        </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Form.Check type="checkbox" label="Only even" />
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>

          <div>
            <Link to="/all-contacts">
              <Button variant="primary" className={classes.ButtonA}>
                All Contacts
              </Button>
            </Link>
            <Link to="/us-contacts">
              <Button variant="primary" className={classes.ButtonB}>
                US Contacts
              </Button>
            </Link>
            <Link to="/">
              <Button variant="secondary" className={classes.ButtonC}>
                Close
              </Button>
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
export default contactModal;
