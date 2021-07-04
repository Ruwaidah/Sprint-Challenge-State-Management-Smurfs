import {
  FETCH_LOAD,
  FETCH_START,
  FETCH_FAILD,
  POST_LOAD,
  POST_START,
  POST_FAILD,
  DELETE_LOAD,
  DELETE_START,
  DELETE_FAILD
} from "../actions";

const initiallstate = {
  data: [],
  isloading: false,
  error: null
};

export const rootReducer = (state = initiallstate, action) => {
  switch (action.type) {
    // FETCH
    case FETCH_LOAD:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case FETCH_START:
      return { ...state, data: action.payload, isloading: false, error: null };
    case FETCH_FAILD:
      return {
        data: [],
        isloading: false,
        error: action.payload
      };

    //   POST
    case POST_LOAD:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case POST_START:
      return { ...state, data: action.payload, isloading: false, error: null };
    case POST_FAILD:
      return {
        data: [],
        isloading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
