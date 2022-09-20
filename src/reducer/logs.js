import {
    GET_LOGS,
    DELETE_LOGS,
    ADD_LOGS,
    CLEAR_LOGS,
} from "../actions/types.js";

const initialState = {
    logs: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
            };
        case DELETE_LOGS:
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload),
            };
        case ADD_LOGS:
            return {
                ...state,
                logs: [...state.logs, action.payload],
            };
        case CLEAR_LOGS:
            return {
                ...state,
                logs: [],
            };
        default:
            return state;
    }
}
