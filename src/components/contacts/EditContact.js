import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import {connect} from "react-redux";
import {getContact, updateContact} from "../../actions/contactActions";
import PropTypes from "prop-types";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getContact(id);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const {name, email, phone} = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = async (e) => {
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
    const {id} = this.props.match.params;
    
    const updateContact = {
      id,
      name,
      email,
      phone
    };
    this.props.updateContact(updateContact);
    this.props.history.push('/');
  };

  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
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
                   value="Update Contact"
                   className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contact: state.contact.contact,
});

export default connect(mapStateToProps, {getContact, updateContact})(EditContact);