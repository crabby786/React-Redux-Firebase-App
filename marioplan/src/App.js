import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import UserList from "./components/projects/UserList";
import { history } from "./helpers/history";
import { compose } from "redux";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    //var isLoggedIn = false;
  }
  render() {
    const { isLoggedIn } = this.props;
    return !isLoggedIn ? (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </Router>
    ) : (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/userlist" component={UserList} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mstp = state => {
  //console.log(state);

  return { isLoggedIn: state.auth.user };
};
//const firebaseConnect = createFirebaseConnect();
export default compose(connect(mstp))(App);
