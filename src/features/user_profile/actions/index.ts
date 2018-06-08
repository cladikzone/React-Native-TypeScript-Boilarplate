export const FETCH_USER = 'FETCH_USER';

// Get user method
const getUser = (userid) => {
    return {
        type: FETCH_USER,
        payload: {
            request: {
                url: `/users/${userid}`
            }
        }
    };
};

// There can be more methods here

export default {
    getUser
    // include all methods here
};