import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getType } from "../../actions/typeUser";
export class ExpertAndNovice extends Component {
    state = {
        question: "",
    };
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("Your question is " + this.state.value);
        event.preventDefault();
    }
    render() {
        if (this.props.TypeOfUser == "novice" && this.props.isAuthenticated) {
            return (
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <p>
                            hello user, we build this system to teach u how to
                            use jira website.
                        </p>
                        <h4>
                            select a question for what you love to do in jira
                            site and we will anserw u
                        </h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>selcet question</label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <option value="o1">
                                        how to create project
                                    </option>
                                    <option value="o2">
                                        how to add people to ur project
                                    </option>
                                    <option value="o3">how to add task</option>
                                    <option value="o4">
                                        how to delete task
                                    </option>
                                    <option value="o5">
                                        how to move task from 'to do list' to
                                        'in progress list'
                                    </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    submit question
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else if (
            this.props.TypeOfUser == "expert" &&
            this.props.isAuthenticated
        ) {
            return (
                <div>
                    <h2>welcome expert user,</h2>
                </div>
            );
        } else return <Redirect to="/login" />;
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    TypeOfUser: state.type.TypeOfUser,
});
export default connect(mapStateToProps, {})(ExpertAndNovice);
