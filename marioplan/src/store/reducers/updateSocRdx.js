const updateSocRdx = (state = [{}], action) => {
  switch (action.type) {
    case "update_soc":
      //console.log(action);

      var label = Object.keys(action.cred);

      state = action.data;
      var newState = label.reduce((init, iteral, j, arr) => {
        if (init.length !== 0)
          var filterData = init.filter((obj, i) => {
            var key = iteral;
            var formikValue = obj[key].toString().replace(/\s+/gi, " ");
            if (obj[key] === undefined || action.cred[key] === "") {
              return true;
            } else {
              return formikValue === action.cred[key];
            }
          });
        return filterData;
      }, state);

      return newState;

    default:
      return state;
  }
};

export default updateSocRdx;
