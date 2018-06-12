import { Action } from 'redux';

export interface ChatState {
    username: string;
    connectedUsers: UserInfo[];
    messages: MessagePayload[];
    apiResponse: Object;
}

export interface UserInfo {
    name: string;
    id: number;
}

export interface TemplateItem {
    item: string;
    text: string;
}

export interface MessagePayload {
    timestamp: Date;
    user: string;
    message: {
        type: 'text' | 'template';
        content?: string;
        items?: TemplateItem[];
    };
}

export interface UsersListUpdatedAction extends Action {
    type: '@@chat/USERS_LIST_UPDATED';
    payload: {
        users: UserInfo[];
    };
}

export interface MessageReceivedAction extends Action {
    type: '@@chat/MESSAGE_RECEIVED';
    payload: {
        timestamp: Date;
        user: string;
        message: MessagePayload;
    };
}

export interface MakeApiCallAction extends Action {
    type: '@@chat/API_CALL';
    payload: {
        request: {
            url: string;
            method: string;
        }
    };
}

export interface ApiCallSuccessAction extends Action {
    type: '@@chat/API_CALL_SUCCESS';
    payload: {
        data: Object
    };
}

export interface ApiCallFailedAction extends Action {
    type: '@@chat/API_CALL_FAIL';
    payload: {
        data: Object
    };
}

export type ChatActions = ( UsersListUpdatedAction | MessageReceivedAction | MakeApiCallAction | ApiCallSuccessAction | ApiCallFailedAction );