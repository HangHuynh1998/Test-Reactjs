import React, { useState, useCallback, useEffect } from 'react';
import { Modal} from "react-bootstrap";
import CustomScrollbars from './CustomScrollbars';
import Contact from './Contact';
import ContactModal from './ContactModal';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { updateCountry, incrementPage } from '../store/actions/filterData'
import { fetchContactData } from '../store/actions/contacData'
const getContacts = (state) => state.contacts.data
const evenFilter = (state) => state.filter.isOnlyEven
const filterEvenContacts = createSelector(
  [getContacts, evenFilter],
  (contacts, onlyEven) => {
    if(onlyEven) return contacts.filter(contact => contact.id % 2 === 0)
    console.log("contact",contacts);
    return contacts
  }
)
const Contacts = ({selectActiveContact,showContacts,countryId,title,page, search, contactsData,
    loading, hasErrors,fetchData, setCountry, nextPage}) => {
        const setCountryCallback = useCallback(() => setCountry(countryId), [countryId, setCountry])
        
        useEffect(() => {
          console.log("setCountryCallback");
          setCountryCallback()
        }, [setCountryCallback])
        
        useEffect(() => {
          console.log("User");
          fetchData(countryId, search, page)
        }, [countryId, search, page, fetchData])
      
        const onReachedToBottom = useCallback(() => {
          nextPage()
        }, [nextPage])
    return (
        <ContactModal title={title} show={showContacts} isLoading={loading}>
          {console.log("contactsData",contactsData)}
             {!hasErrors && (
          <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
            { contactsData.map( (contact, id) => 
            (<div className="d-flex" onClick={selectActiveContact(contact)} style={{cursor:"pointer"}} key={id}>
                <p className="mr-3">{contact.id}</p>
                <p className="mr-3"><strong>{contact.first_name} {contact.last_name}</strong></p>
                <p className="mr-3">{contact.email}</p>
                <p>{contact.phone_number}</p>
            </div>))} 
            {hasErrors && (
             "Error!"
              )}
          </CustomScrollbars>)}
          </ContactModal>
    );
};
const mapStateToProps = (state) => ({
    contactsState: state.contacts,
    contactsData: filterEvenContacts(state),
    page: state.filter.page,
    search: state.filter.search,
    loading: state.contacts.loading,
    hasErrors: state.contacts.hasErrors
  })
  
  const mapDispatchToProps = (dispatch) => ({
    setCountry: (countryId) => dispatch(updateCountry(countryId)),
    nextPage: () => dispatch(incrementPage()),
    fetchData: (countryId, searchKey, page) => dispatch(fetchContactData(countryId, searchKey, page))
  })
export default connect(mapStateToProps, mapDispatchToProps)(Contacts)