import React, { useEffect } from "react";
import Smurf from "./Smurf";

import { connect } from "react-redux";
import { axiosAction } from "../actions";

function Smurfs(props) {
  useEffect(() => {
    props.axiosAction();
  }, [axiosAction]);
  console.log(props);
  return (
    <div>
      {" "}
      {props.smurfs ? props.smurfs.map(item => <Smurf smurf={item} />) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return { smurfs: state.data.data };
};

export default connect(
  mapStateToProps,
  { axiosAction }
)(Smurfs);
