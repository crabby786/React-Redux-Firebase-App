const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        ...action.user,
        authError: null
      };
    case "LOGOUT_SUCCESS":
      return state;
    case "REGISTER_SUCCESS":
      return { ...state, userId: action.userId };
    default:
      return state;
  }
};

export default authReducer;
