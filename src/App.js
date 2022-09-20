import React, { Component, Fragment } from "react";
import Header from "../src/component/layout/Header";
import Dashboard from "./component/Logs/Dashboard";
import { Provider } from "react-redux";
import store from "../src/component/store";
import Alerts from "../src/component/layout/Alerts";
import { ToastContainer } from "react-toastify";
import Login from "./component/accounts/Login";
import Register from "./component/accounts/Register";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../src/component/common/PrivateRoute";
import { loadUser } from "../src/actions/auth";
import { getType } from "../src/actions/typeUser";
import TypeOfUser from "../src/extension/design/typeOfUser";
import ExpertAndNovice from "./extension/design/ExpertAndNovice";
export class App extends Component {
    componentDidMount() {
        store.dispatch(getType());
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Alerts />

                        <div className="container">
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={TypeOfUser}
                                />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/register"
                                    component={Register}
                                />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
                <ToastContainer />
            </Provider>
        );
    }
}

export default App;
