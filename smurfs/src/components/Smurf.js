import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";

import SmurfName from "./SmurfName";

import { axiosAction, addSmurf } from "../actions";

function Smurf(props) {
  const newPath = `/smurfs/${props.smurf.id}`;
  console.log(props.data);
  //   const newdata = props.data;
  const smurfClick = event => {
    console.log(event);
    event.preventDefault();
    props.smurfClick(props.smurf.id);
  };
  return (
    <>
      <Link to={newPath}>
        <div>
          <h1>{props.smurf.name}</h1>
          <p>{props.smurf.age}</p>
          <p>{props.smurf.height}</p>
        </div>
      </Link>
    </>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return { data: state };
};
mapStateToProps();
export default connect(
  mapStateToProps,
  {}
)(Smurf);
