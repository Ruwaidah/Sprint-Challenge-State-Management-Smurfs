import React, { Component, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

import Smurfs from "./Smurfs";
import AddsmurfForm from "./AddSmurfForm";

import { axiosAction, addSmurf } from "../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onSubmit = values => {
    this.props.addSmurf(values);
    console.log(values);
  };

  render() {
    console.log(this.props.smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddsmurfForm onSubmit={this.onSubmit} />
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { smurfs: state.data };
};

export default connect(
  mapStateToProps,
  { axiosAction, addSmurf }
)(App);
