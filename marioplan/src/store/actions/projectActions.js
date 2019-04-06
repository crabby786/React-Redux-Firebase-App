export const createProject = (project) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName:'vilas',
      authorLastName:'karande',
      authorId: 12345,
      createdAt: new Date()
    }).then(()=> dispatch({type:'CREATE_PROJECT_SUCCESS'}) )
      .catch(err=> dispatch({
        type:'CREATE_PROJECT_ERROR',
        err
      }));
  }
}