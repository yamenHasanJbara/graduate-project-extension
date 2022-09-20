import { combineReducers } from "redux";
import logs from "./logs";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import type from "./type";
export default combineReducers({
    logs,
    errors,
    messages,
    auth,
    type,
});
