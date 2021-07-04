import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { axiosAction, addSmurf, deleteData } from "../actions";

function Smurfs(props) {
  useEffect(() => {
    props.axiosAction();
  }, [axiosAction, addSmurf, deleteData]);
  console.log(props);
  return (
    <div>
      <Link className="addnew" to="/addNewSmurf">
        Add New Smurf
      </Link>{" "}
      <div className="allsmurfs">
        {props.smurfs
          ? props.smurfs.map(item => (
              <Smurf smurf={item} smurfClick={props.smurfClick} key={item.id} />
            ))
          : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { smurfs: state.data.data };
};

export default connect(
  mapStateToProps,
  { axiosAction, addSmurf, deleteData }
)(Smurfs);
