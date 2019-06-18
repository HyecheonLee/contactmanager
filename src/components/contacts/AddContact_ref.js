import React, {Component} from 'react';

class AddContact extends Component {
  static defaultProps = {
    name: "Fred Smith",
    email: "fred@yahoo.com",
    phone: "777-777-7777"
  };

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };

  render() {
    const {name, email, phone} = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                     name="name"
                     className="form-control form-control-lg"
                     placeholder="Enter Name..."
                     defaultValue={name}
                     ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="email"
                     name="email"
                     className="form-control form-control-lg"
                     placeholder="Enter Email..."
                     defaultValue={email}
                     ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input type="phone"
                     name="phone"
                     className="form-control form-control-lg"
                     placeholder="Enter Phone..."
                     defaultValue={phone}
                     ref={this.phoneInput}
              />
            </div>
            <input type="submit"
                   value="Add Contact"
                   className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;