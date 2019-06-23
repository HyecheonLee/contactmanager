import React, {Component} from 'react';
import {Consumer} from "../../context";
import uuid from 'uuid';
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    const newContact = {
      id: uuid(),
      name: name,
      email,
      phone
    };
    dispatch({type: 'ADD_CONTACT', payload: newContact});
    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  };

  render() {
    const {name, email, phone} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label={"Name"}
                    name={"name"}
                    placeholder={"Enter Name..."}
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup label={"Email"}
                                  onChange={this.onChange}
                                  value={email}
                                  placeholder={"Enter Email..."}
                                  name={"email"}
                                  type={"email"}
                  />
                  <TextInputGroup label={"Phone"}
                                  onChange={this.onChange}
                                  value={phone}
                                  type={"tel"}
                                  placeholder={"Enter Phone..."}
                                  name={"phone"}/>
                  <input type="submit"
                         value="Add Contact"
                         className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;