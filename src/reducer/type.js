import {
    ADD_TYPE,
    GET_TYPE,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
} from "../actions/types";

const initialState = {
    TypeOfUser: null,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TYPE:
            localStorage.setItem("TypeOfUser", action.payload.TypeOfUser);
            return {
                ...state,
                TypeOfUser: action.payload.TypeOfUser,
            };
        case GET_TYPE:
            localStorage.setItem("TypeOfUser", action.payload[0].TypeOfUser);
            return {
                ...state,
                TypeOfUser: action.payload[0].TypeOfUser,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("TypeOfUser", action.payload.type);
            return {
                ...state,
                TypeOfUser: action.payload.type,
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("TypeOfUser");
            return {
                ...state,
                TypeOfUser: null,
            };

        default:
            return state;
    }
}
