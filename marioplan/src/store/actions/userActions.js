import { alertActions } from "./alertActions";
import { history } from "../../helpers/history";

export const UserActions = {
  login,
  logout,
  register,
  updateProfile,
  updatePassword,
  deleteUser,
  isLoggedIn
};
function login(creds) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.userName, creds.password)
      .then(user => {
        history.push("/");
        dispatch({ type: "LOGIN_SUCCESS", user });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
        dispatch(alertActions.error(err.toString()));
      });
  };
}
function logout() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/login");
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
}
function register(user) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(user2 => {
        let userId = user2.user.uid;
        firebase.set("users/" + userId, { ...user });
        dispatch({ type: "REGISTER_SUCCESS", userId });
        history.push("/");
      })
      .catch(err => dispatch({ type: "REGISTER_FAILED", msg: err.message }));
  };
}
function updateProfile(newUser) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        email: newUser.email,
        photoURL: newUser.imgUrl
      })
      .then(user => {
        dispatch({ type: "UPDATEUSER_SUCCESS", user });
      })
      .catch(err => dispatch({ type: "UPDATEUSER_FAILED", msg: err.message }));
  };
}
function updatePassword(newPass) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var user = firebase.auth().currentUser;
    var newPassword = newPass;
    user
      .updatePassword(newPassword)
      .then(newPass => {
        dispatch({ type: "UPDATEPASS_SUCCESS", newPass });
        history.push("/login");
      })
      .catch(err => dispatch({ type: "UPDATEPASS_FAILED", msg: err.message }));
  };
}
function deleteUser(userId) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var user = firebase.auth().currentUser;
    user
      .delete()
      .then(user => {
        dispatch({ type: "DELETEUSER_SUCCESS", user });
      })
      .catch(err => dispatch({ type: "DELETEUSER_FAILED", msg: err.message }));
  };
}
function isLoggedIn(user) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged(function(user) {
      var user2 = firebase.auth().currentUser;

      if (user) {
        return true;
      } else {
        return false;
      }
    });
  };
}
