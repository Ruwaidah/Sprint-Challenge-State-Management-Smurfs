import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// reducer
import { rootReducer } from "./reducers/rootReducer";

// Redux and React-Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
