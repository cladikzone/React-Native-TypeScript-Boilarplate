import { FETCH_USER } from '../actions';

let initialState = {};
const userProfileData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user : action.user };
        default: return state;
    }
};

export default userProfileData;