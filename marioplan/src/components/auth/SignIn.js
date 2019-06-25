import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router";
import { UserActions } from "../../store/actions/userActions";

class SignIn extends Component {
  state = {
    userName: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form className="card" onSubmit={this.handleSubmit}>
          <h5 className="text-primary">Sign In</h5>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              id="userName"
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
            <button className="btn btn-info" type="submit">
              Login
            </button>
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push("/signup")}
            >
              sign up
            </button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //   signIn: creds => dispatch(signIn(creds))
  // };
  return { signIn: creds => dispatch(UserActions.login(creds)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
