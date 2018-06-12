import { createStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { ApplicationState, reducers } from './store';
import { API_CONFIG } from './api/constants';

const logger = createLogger({
  timestamps: true,
  duration: true
});

const client = axios.create({
  baseURL: API_CONFIG.BASE_URL, // Api base url should be here
  responseType: 'json'
});

export default function configureStore(
  // history: History,
  // initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools();
  return createStore(
    reducers,
    // initialState,
    applyMiddleware(thunk, logger, axiosMiddleware(client))
    // composeEnhancers()
  );
}