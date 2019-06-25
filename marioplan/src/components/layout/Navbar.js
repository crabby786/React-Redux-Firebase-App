import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createFirebaseConnect, helpers } from "react-redux-firebase";
import { compose } from "redux";
import { UserActions } from "../../store/actions/userActions";

const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers;

class Navbar extends Component {
  render() {
    const { auth, society, firebase, logOut } = this.props;
    if (isEmpty(society) || !isLoaded(society)) {
      return (
        <div className="spinner">
          <img src="/img/loading.gif" alt="loading" />
        </div>
      );
    } else {
      var data = Object.values(society)[0];
      var tal = [];
      data.map(obj => (tal = [...tal, obj.value["तालुका रत्नागिरी"]]));
      tal = [...new Set(tal)];

      return (
        <div>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <NavLink className="navbar-brand" to="#">
              Audit App
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Link
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Link
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={logOut}>
                    logout
                  </a>
                </li>
                {/* <li>
      <button onClick={() => firebase.watchEvent('value', '/')}>
        Load Todos
      </button>
      </li> */}
                {/* <!-- Dropdown --> */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    District
                  </NavLink>
                  <div className="dropdown-menu">
                    {tal.map(obj => (
                      <NavLink key={obj} className="dropdown-item" to="#">
                        {obj}
                      </NavLink>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    society: state.firebase.ordered
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(UserActions.logout())
  };
};
const firebaseConnect = createFirebaseConnect();

export default compose(
  firebaseConnect([{ path: "/", queryParams: ["limitToFirst=2"] }]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navbar);
