import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { ADD_TYPE, GET_TYPE } from "./types";
import { tokenConfig } from "./auth";

// register type of user if expert or novice
export const registerType = (type) => (dispatch, getState) => {
    console.log(type, tokenConfig(getState));
    axios
        .post("http://127.0.0.1:8000/api/type/", type, tokenConfig(getState))
        .then((res) => {
            dispatch(
                createMessage({
                    addType:
                        "thanx for you, now you can move on to extension interface",
                })
            );
            console.log(res.data);
            dispatch({
                type: ADD_TYPE,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// get user information if it's novice or expert

export const getType = () => (dispatch, getState) => {
    console.log(tokenConfig(getState));
    axios
        .get("http://127.0.0.1:8000/api/type/", tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_TYPE,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
