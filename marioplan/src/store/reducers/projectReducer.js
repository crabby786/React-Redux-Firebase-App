const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("reducer reached", action.project);
      break;
    default:
      return state;
  }
};

export default projectReducer;
