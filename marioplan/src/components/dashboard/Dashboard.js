import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import UserList from "../projects/UserList";
import SocFilter from "../projects/soc.filter";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, Soc, filtersObj } = this.props;
    // if(Soc && Soc.length !== 0 ) var filters = ;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {Soc && <SocFilter filterFields={Object.keys(Soc[0][1])} />}
          </div>
          <div className="col s12 m5 offset-m1">
            <UserList filterList={filtersObj} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filtersObj: state.updateSocrdx,
    Soc: state.firestore.ordered.Society
  };
};

export default connect(mapStateToProps)(Dashboard);
