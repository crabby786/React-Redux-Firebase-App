import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "../projects/UserList";
import SocFilter from "../projects/soc.filter";
import { createFirebaseConnect, helpers } from "react-redux-firebase";
import { compose } from "redux";
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers;

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { data1, id, allUsers } = this.props;
    // if(Soc && Soc.length !== 0 ) var filters = ;

    if (isEmpty(data1)) {
      return (
        <div className="spinner">
          <img src="/img/loading.gif" alt="loading" />
        </div>
      );
    } else {
      var data = Object.values(data1)[0];
      var filterFields = Object.keys(Object.values(data[0])[1]);
      var ff = [];
      data.map((obj, i) => {
        if (i < 10) ff = [...ff, obj.value];
        return ff;
      });
      //console.log(data1);

      return (
        <div
          className="dashboard container-fluid"
          style={{ margin: "10px 20px" }}
        >
          <div className="row">
            {allUsers && <h4>{JSON.stringify(allUsers[id])}</h4>}
            <div
              className="col-12 col-sm-4"
              style={{ overflow: "scroll", height: "calc(100vh - 50px)" }}
            >
              <h4 style={{ textAlign: "center" }}>Filters</h4>
              {/* {filterFields.map(obj=> <div className="td" key={obj}>{obj}</div> )} */}
              {data && <SocFilter className="" filterFields={ff} />}
            </div>
            <div
              className="col-12 col-sm-8"
              style={{ overflow: "scroll", height: "calc(100vh - 64px)" }}
            >
              <h4 style={{ textAlign: "center" }}>Result</h4>
              {isLoaded(data) && (
                <UserList style={{ width: "100%", overflow: "auto" }} />
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    filtersObj: state.updateSocrdx,
    data1: state.firebase.ordered,
    profile: state.firebase.profile,
    id: state.firebase.auth.uid,
    allUsers: state.firebase.data.users
  };
};
const firebaseConnect = createFirebaseConnect();
export default compose(
  connect(mapStateToProps),
  firebaseConnect(["/users"])
)(Dashboard);
