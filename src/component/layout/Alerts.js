import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };
    componentDidUpdate(prevProps) {
        const { error, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.logs) {
                toast.error(`logs: ${error.msg.logs.join()}`);
            }
            if (error.msg.non_field_errors) {
                toast.error(error.msg.non_field_errors.join());
            }
            if (error.msg.username) {
                toast.error(error.msg.username.join());
            }
        }
        if (message !== prevProps.message) {
            if (message.deleteLogs) {
                toast.success(message.deleteLogs);
            }
            if (message.AddLogs) {
                toast.success(message.AddLogs);
            }
            if (message.passwordNotMatch) {
                toast.error(message.passwordNotMatch);
            }
            if (message.TypeNotAvaliable) {
                toast.error(message.TypeNotAvaliable);
            }
            if (message.addType) {
                toast.success(message.addType);
            }
        }
    }
    render() {
        return <Fragment />;
    }
}
const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages,
});
export default connect(mapStateToProps, {})(Alerts);
