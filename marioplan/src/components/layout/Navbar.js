import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createFirebaseConnect, helpers } from "react-redux-firebase";
import { compose } from "redux";
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers;

class Navbar extends Component {
  componentDidMount() {}

  render() {
    const { auth, society, firebase } = this.props;
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
          <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <NavLink className="navbar-brand" to="#">
              Audit App
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink className="nav-link" to="#">
                    Link
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="#">
                    Link
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
                {/* <li>
      <button onClick={() => firebase.watchEvent('value', '/')}>
        Load Todos
      </button>
      </li> */}
                {/* <!-- Dropdown --> */}
                <li class="nav-item dropdown">
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
const firebaseConnect = createFirebaseConnect();

export default compose(
  firebaseConnect([{ path: "/", queryParams: ["limitToFirst=2"] }]),
  connect(mapStateToProps)
)(Navbar);
