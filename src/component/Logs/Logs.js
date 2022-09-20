import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs, deleteLogs } from "../../actions/logs";

export class Logs extends Component {
    static propTypes = {
        logs: PropTypes.array.isRequired,
        getLogs: PropTypes.func.isRequired,
        deleteLogs: PropTypes.func.isRequired,
    };
    componentDidMount() {
        this.props.getLogs();
    }
    render() {
        return (
            <Fragment>
                <h2>LOGS</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>LOGS</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.logs.map((log) => (
                            <tr key={log.id}>
                                <td>{log.id}</td>
                                <td>{log.logs}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteLogs.bind(
                                            this,
                                            log.id
                                        )}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    logs: state.logs.logs,
});
export default connect(mapStateToProps, { getLogs, deleteLogs })(Logs);
