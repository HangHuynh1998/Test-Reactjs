import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import classes from "./style/Modal.module.css";
import Contact from "./component/Contact";
import { useState } from "react";
import Contacts from "./component/Contacts";
import { COUNTRY_ALL, COUNTRY_US } from "./store/actions/actionTypes";
function App() {
  const [showContacts, setShowContacts] = useState(true);
  const [showContactDetail, setShowContactDetail] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const onSelectedActiveContact = (contact) => {
    setShowContacts(false);
    setActiveContact(contact);
    setShowContactDetail(true);
  };

  const onCloseDetail = () => {
    setShowContactDetail(false);
    setShowContacts(true);
  };
  return (
    <BrowserRouter>
      {console.log("activeContact", activeContact)}
      <Container className="text-center">
        <Link to="/all-contacts">
          <Button variant="primary" className={classes.ButtonA}>
            All Contacts
          </Button>
        </Link>
        <Link to="/us-contacts">
          <Button className={classes.ButtonB}>US Contacts</Button>
        </Link>
        {activeContact && (
          <Contact
            contact={activeContact}
            showContactDetail={showContactDetail}
            onCloseContact={onCloseDetail}
          />
        )}
        <Switch>
          <Route exact path="/all-contacts">
            <Contacts
              title="All Contacts"
              countryId={COUNTRY_ALL}
              showContacts={showContacts}
              selectActiveContact={onSelectedActiveContact}
            />
          </Route>
          <Route exact path="/us-contacts">
            <Contacts
              title="US Contacts"
              countryId={COUNTRY_US}
              showContacts={showContacts}
              selectActiveContact={onSelectedActiveContact}
            />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
