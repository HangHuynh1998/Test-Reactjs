import React, { useCallback, useEffect } from "react";
import CustomScrollbars from "./CustomScrollbars";
import ContactModal from "./ContactModal";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { updateCountry, incrementPage } from "../store/actions/filterData";
import { fetchContactData } from "../store/actions/contacData";
const getContacts = (state) => {
  return state.contacts.data;
};
const evenFilter = (state) => state.filter.isOnlyEven;
const filterEvenContacts = createSelector(
  [getContacts, evenFilter],
  (contacts, onlyEven) => {
    if (onlyEven) return contacts.filter((contact) => contact.id % 2 === 0);
    return contacts;
  }
);

const mapStateToProps = (state) => ({
  contactsState: state.contacts,
  contactsData: filterEvenContacts(state),
  pageNo: state.filter.page,
  searchKeyword: state.filter.search,
  loading: state.contacts.loading,
  hasErrors: state.contacts.hasErrors,
});

const mapDispatchToProps = (dispatch) => ({
  setCountry: (countryId) => dispatch(updateCountry(countryId)),
  nextPage: () => dispatch(incrementPage()),
  fetchData: (countryId, searchKey, pageNo) =>
    dispatch(fetchContactData(countryId, searchKey, pageNo)),
});

const Contacts = ({
  countryId,
  title,
  showContacts,
  pageNo,
  searchKeyword,
  contactsData,
  loading,
  hasErrors,
  selectActiveContact,
  fetchData,
  setCountry,
  nextPage,
}) => {
  const setCountryCallback = useCallback(() => setCountry(countryId), [
    countryId,
    setCountry,
  ]);
  useEffect(() => {
    setCountryCallback();
  }, [setCountryCallback]);

  useEffect(() => {
    fetchData(countryId, searchKeyword, pageNo);
  }, [countryId, searchKeyword, pageNo, fetchData]);

  const onReachedToBottom = useCallback(() => {
    nextPage();
  }, [nextPage]);

  return (
    <ContactModal title={title} show={showContacts} isLoading={loading}>
      {!hasErrors && (
        <CustomScrollbars
          onReachedBottom={onReachedToBottom}
          style={{ height: 300 }}
        >
          {contactsData.map((contact, id) => (
            <div
              key={id}
              className="d-flex"
              onClick={() => selectActiveContact(contact)}
            >
              <p className="mr-3">{contact.id}</p>
              <p className="mr-3">
                <strong>
                  {contact.first_name} {contact.last_name}
                </strong>
              </p>
              <p className="mr-3">{contact.email}</p>
              <p>{contact.phone_number}</p>
            </div>
          ))}
        </CustomScrollbars>
      )}
      {hasErrors && "Error!"}
    </ContactModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
