import React, { Fragment } from "react";
import Form from "./Form";
import Logs from "./Logs";

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Logs />
        </Fragment>
    );
}
