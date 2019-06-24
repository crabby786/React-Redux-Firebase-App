import alertConstants from "../../constants/alert.constant";

export const alertActions = {
  success,
  error,
  clear
};

const success = message => {
  return { type: alertConstants.type.success, msg: message };
};
const error = message => {
  return { type: alertConstants.type.error, msg: message };
};
const clear = message => {
  return { type: alertConstants.type.clear };
};
