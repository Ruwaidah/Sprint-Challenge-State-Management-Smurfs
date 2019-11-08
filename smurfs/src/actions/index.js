import axios from "axios";

// FETCH
export const FETCH_LOAD = "FETCH_LOAD";
export const FETCH_START = "FETCH_START";
export const FETCH_FAILD = "FETCH_FAILD";

// Post
export const POST_LOAD = "POST_LOAD";
export const POST_START = "POST_START";
export const POST_FAILD = "POST_FAILD";

export const axiosAction = newList => dispatch => {
  dispatch({ type: FETCH_LOAD });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => dispatch({ type: FETCH_START, payload: response }))
    .catch(error => console.log(error));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST_LOAD });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => dispatch({ type: POST_START, payload: response }))
    .catch(error => console.log(error));
};
