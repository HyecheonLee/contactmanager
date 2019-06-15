import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onShowClick = this.onShowClick.bind(this);
  }

  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onShowClick = (name, e) => {
  };

  render() {
    const {name, email, phone} = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>{name} <i onClick={this.onShowClick} className="fas fa-sort-down"/></h4>
        <ul className="list-group">
          <li className="list-group-item">email : {email}</li>
          <li className="list-group-item">phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;