import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerType } from "../../actions/typeUser";
import PropTypes from "prop-types";
import { createMessage } from "../../actions/messages";
export class typeOfUser extends Component {
    state = {
        TypeOfUser: "",
    };
    static propTypes = {
        registerType: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        const { TypeOfUser } = this.state;
        if (TypeOfUser == "expert" || TypeOfUser == "novice") {
            const type = { TypeOfUser };
            this.props.registerType(type);
            console.log(TypeOfUser);
        } else {
            this.props.createMessage({
                TypeNotAvaliable: "please enter either novice or expert",
            });
        }
    };
    render() {
        if (this.props.isAuthenticated) {
            const { TypeOfUser } = this.state;
            return (
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Choosing your type</h2>
                        <p>
                            please choose what u think about your self, if you
                            know how to use jira website write 'expert' or if
                            you don't how to use jira write novice
                        </p>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>TYPE</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="TypeOfUser"
                                    onChange={this.onChange}
                                    value={TypeOfUser}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Register your type
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/login" />;
        }
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { registerType, createMessage })(
    typeOfUser
);
