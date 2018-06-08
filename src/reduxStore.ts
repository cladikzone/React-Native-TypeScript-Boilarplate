import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers';
import { API } from './api/constants';

const client = axios.create({
  baseURL: API.BASE_URL,
  responseType: 'json'
});

const logger = createLogger({
  timestamps: true,
  duration: true
});

const reduxStore = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger, axiosMiddleware(client)))
);

export default reduxStore;