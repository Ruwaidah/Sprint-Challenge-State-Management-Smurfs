import React from "react";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";
import { deleteData } from "../actions";

function SmurfName(props) {
  console.log(props);
  console.log(props.match.params.id);
  console.log(props.state.data);
  const smurf = props.state.data.filter(
    item => item.id == props.match.params.id
  );

  const onDelete = () => {
    props.deleteData(props.match.params.id, smurf);
    props.history.push("/");
  };

  console.log(smurf);
  return (
    <>
      <h1>Wellcome</h1>
      <div className="smurfpage">
        <h2>{smurf[0].name}</h2>
        <h3>{smurf[0].age}</h3>
        <h3>{smurf[0].height}</h3>
        <button onClick={onDelete}>delete</button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return { state: state.data };
};
export default connect(
  mapStateToProps,
  { deleteData }
)(SmurfName);
