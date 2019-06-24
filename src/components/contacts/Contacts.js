import React, {Component, Fragment} from 'react';
import Contact from "./Contact";
import {Consumer} from "../../context";

class Contacts extends Component {
  constructor(props) {

    super(props);
    this.state = {
      contacts: []
    }
  }

  deleteContact = (id) => (e) => {
    this.setState({
      contacts: this.state.contacts
        .filter(value => value.id !== id)
    })
  };

  render() {
    return (
      <Consumer>
        {value => {
          const {contacts} = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact =>
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              )}
            </Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;
