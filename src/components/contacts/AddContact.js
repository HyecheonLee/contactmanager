import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import uuid from 'uuid';
import {addContact} from "../../actions/contactActions";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    if (name === '') {
      this.setState({
        errors: {name: 'Name is required'}
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: {email: 'Email  is required'}
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: {phone: 'Phone is required'}
      });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    this.props.addContact(newContact);

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });
    this.props.history.push('/');
  };

  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label={"Name"}
              name={"name"}
              placeholder={"Enter Name..."}
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label={"Email"}
              onChange={this.onChange}
              value={email}
              placeholder={"Enter Email..."}
              name={"email"}
              type={"email"}
              error={errors.email}
            />
            <TextInputGroup
              label={"Phone"}
              onChange={this.onChange}
              value={phone}
              type={"tel"}
              placeholder={"Enter Phone..."}
              name={"phone"}
              error={errors.phone}
            />
            <input type="submit"
                   value="Add Contact"
                   className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default connect(null, {addContact})(AddContact);