import React, { Component } from "react";
import { connect } from "react-redux";
import { UserActions } from "../../store/actions/userActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Sign Up</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
              {/* <div className="card-footer">
          <button className="btn btn-primary" >Sign Up</button>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mstp=(state) => {
//   return state;
// }
const mdtp = dispatch => {
  return { registerUser: user => dispatch(UserActions.register(user)) };
};
export default connect(
  null,
  mdtp
)(SignUp);
