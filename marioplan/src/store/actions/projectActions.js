import { soc } from "../../Modals/socJson";

export const createProject = () => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("Society")
      .add({
        ...soc
      })
      .then(obj => {
        console.log("action Reached");
        dispatch({ type: "CREATE_PROJECT_SUCCESS", project: obj.json() });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
