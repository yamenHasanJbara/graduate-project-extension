import axios from "axios";
import { GET_LOGS, DELETE_LOGS, ADD_LOGS } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
// GET LOGS
export const getLogs = () => (dispatch, getState) => {
    axios
        .get("http://127.0.0.1:8000/api/logs/", tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_LOGS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

//ADD_LOGS;
export const addLOGS = (log) => (dispatch, getState) => {
    axios
        .post("http://127.0.0.1:8000/api/logs/", log, tokenConfig(getState))
        .then((res) => {
            dispatch(
                createMessage({
                    AddLogs: "Logs ADDED",
                })
            );
            dispatch({
                type: ADD_LOGS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
// Delete LOGS
export const deleteLogs = (id) => (dispatch, getState) => {
    axios
        .delete(`http://127.0.0.1:8000/api/logs/${id}/`, tokenConfig(getState))
        .then((res) => {
            dispatch(
                createMessage({
                    deleteLogs: "Logs deleted",
                })
            );
            dispatch({
                type: DELETE_LOGS,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};
