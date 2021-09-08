import {
    ADD_USER
} from "../actions/actionTypes";

export const userReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...action.payload]};
        default:
            return state;
    }
}