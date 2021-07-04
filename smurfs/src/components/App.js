import React, { Component, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import Smurfs from "./Smurfs";
import AddsmurfForm from "./AddSmurfForm";
import SmurfName from "./SmurfName";

import { axiosAction, addSmurf } from "../actions";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mydata: ""
    };
  }

  // smurfClick = id => {
  //   console.log(id);
  // };

  onSubmit = (values, back) => {
    this.props.addSmurf(values);
    console.log(back);
    // this.props.axiosAction();
    back.push("/");
  };

  render() {
    console.log(this.props);
    // this.setState({
    //   mydata: this.props.axiosAction()
    // });
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Have fun!</div>
        <Route path="/smurfs/:id" render={props => <SmurfName {...props} />} />
        <Route
          exact
          path="/"
          render={() => <Smurfs smurfClick={this.smurfClick} />}
        />
        <Route
          path="/addNewSmurf"
          render={props => (
            <AddsmurfForm onSubmit={this.onSubmit} back={props.history} />
          )}
        />
        {/* <AddsmurfForm onSubmit={this.onSubmit} /> */}
        {/* <Smurfs /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // useEffect(() => {
  //   axiosAction();
  // }, []);
  console.log(state);
  return { smurfs: state.data };
};

export default connect(
  mapStateToProps,
  { axiosAction, addSmurf }
)(App);
