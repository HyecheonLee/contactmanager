import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteContact} from "../../actions/contactActions";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactInfo: false
    };
  }

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (<div className="card card-body mb-3">
      <h4>
        {name}{' '}
        <i
          onClick={this.onShowClick}
          className="fas fa-sort-down"
          style={{cursor: "pointer"}}
        />
        <i className="fas fa-times"
           style={{cursor: "pointer", float: "right", color: "red"}}
           onClick={this.onDeleteClick.bind(this, id)}
        />
        <Link to={`contact/edit/${id}`}>
          <i className="fas fa-pencil-alt"
             style={{cursor: "pointer", float: "right", color: "black", marginRight: '1rem'}}/>
        </Link>
      </h4>
      {showContactInfo &&
      <ul className="list-group">
        <li className="list-group-item">email : {email}</li>
        <li className="list-group-item">phone : {phone}</li>
      </ul>}
    </div>);
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, {deleteContact})(Contact);