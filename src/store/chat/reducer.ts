import { Reducer } from 'redux';
import { ChatState, ChatActions } from './types';

// Type-safe initialState!
export const initialState: ChatState = {
    username: '',
    connectedUsers: [],
    messages: [],
    apiResponse: Object
};

const reducer: Reducer<ChatState> = (state: ChatState = initialState, action) => {
    switch ((action as ChatActions).type) {
        case '@@chat/API_CALL':
            return { ...state, username: action.payload.username };
        case '@@chat/API_CALL_SUCCESS':
            return { ...state, apiResponse: action.payload.data };
        case '@@chat/API_CALL_FAIL':
            return { ...state, apiResponse: action.payload };
        case '@@chat/USERS_LIST_UPDATED':
            return { ...state, connectedUsers: action.payload.users };
        case '@@chat/MESSAGE_RECEIVED':
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            return state;
    }
};

export default reducer;