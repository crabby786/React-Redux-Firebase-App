const updateSocRdx = (state = {}, action) => {
    switch (action.type) {
      case "update_soc":
        return { ...action.cred };
  
      default:
        return state;
    }
  };
  
  export default updateSocRdx;
  