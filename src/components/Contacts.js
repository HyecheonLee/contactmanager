import React, {Component, Fragment} from 'react';
import Contact from "./Contact";
import {Consumer} from "../context";

class Contacts extends Component {
  constructor(props) {

    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-555"
        },
        {
          id: 2,
          name: "Karen williams",
          email: "karen@gmail.com",
          phone: "222-222-222"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "henry@gmail.com",
          phone: "111-111-111"
        }
      ]
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
              {contacts.map(contact =>
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact(contact.id)}
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
