import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from "./components/App";
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
