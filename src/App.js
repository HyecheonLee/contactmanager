import React, {Component} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";
import store from "./store";
import {Provider} from "react-redux";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding={"Contact Manager"}/>
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={Contacts}/>
                <Route exact path={"/contact/add"} component={AddContact}/>
                <Route exact path={"/contact/edit/:id"} component={EditContact}/>
                <Route exact path={"/about/:id"} component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
