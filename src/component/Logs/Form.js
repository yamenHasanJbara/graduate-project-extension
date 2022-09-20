import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLOGS } from "../../actions/logs";

export class Form extends Component {
    state = {
        logs: "",
    };

    static propTypes = {
        addLOGS: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { logs } = this.state;
        const log = { logs };
        this.props.addLOGS(log);
        this.setState({
            logs: "",
        });
    };
    render() {
        const { logs } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Logs</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>LOGS</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="logs"
                            onChange={this.onChange}
                            value={logs}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addLOGS })(Form);
