import { combineReducers, Dispatch, Reducer } from 'redux';
// import { routerReducer } from 'react-router-redux';

// Import your state types and reducers here.
import { ChatState } from './chat/types';
import chatReducer from './chat/reducer';

// The top-level state object
export interface ApplicationState {
    chat: ChatState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    // router: routerReducer,
    chat: chatReducer
});

// tslint:disable-next-line:no-shadowed-variable
export interface ConnectedReduxProps<Action> {
    dispatch: Dispatch<any>;
}