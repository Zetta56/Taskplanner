import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import express from "./api/express";
import reducers from "./reducers";
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const refresh = store => next => async (action) => {
	if(!window.refreshCooldown) {
		await express.post("/refresh");
		window.refreshCooldown = true;
	};
	next(action);
};
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, refresh)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);