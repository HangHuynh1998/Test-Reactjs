import React, { Component } from "react";
import { Modal, Spinner, Button, Form } from "react-bootstrap";
import classes from "../style/Modal.module.css";
import { Link } from "react-router-dom";
import { updateSearch, updateEvenFilter } from "../store/actions/filterData";
import { connect } from "react-redux";

const ContactsModal = ({
  title,
  show,
  searchKeyword,
  isOnlyEven,
  isLoading = false,
  updateSearch,
  updateOnlyEvenFilter,
  children,
}) => {
  var timerId = null;
  const onHandleKeydown = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        if (timerId != null) clearTimeout(timerId);
        updateSearch(e.target.value);
      }
      e.preventDefault();
    }
  };

  const onHandleChange = (e) => {
    if (timerId != null) clearTimeout(timerId);
    const inputValue = e.target.value;
    timerId = setTimeout(() => {
      updateSearch(inputValue);
    }, 200);
  };
  return (
    <Modal size="lg" backdrop="static" centered show={show}>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        {title}
        <Form>
          <Form.Control
            type="text"
            placeholder="Search contacts"
            value={searchKeyword}
            onKeyDown={onHandleKeydown}
            onChange={onHandleChange}
          />
        </Form>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Form.Check
          type="checkbox"
          label="Only even"
          checked={isOnlyEven}
          onChange={(e) => updateOnlyEvenFilter(e.target.checked)}
        />
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : null}

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
};
const mapStateToProps = (state) => ({
  searchKeyword: state.filter.searchKeyword,
  isOnlyEven: state.filter.isOnlyEven,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (s) => dispatch(updateSearch(s)),
  updateOnlyEvenFilter: (b) => dispatch(updateEvenFilter(b)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsModal);
