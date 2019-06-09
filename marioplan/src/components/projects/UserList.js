import React from "react";
import { connect } from "react-redux";
import { firestoreConnect,createFirebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createProject } from "../../store/actions/projectActions";
import { firebase, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers


//firebase.push('/todos', { text: newTodo.value, done: false })
class UserList extends React.Component {
    constructor(props) {
        super(props);
        
    }
  render() {
    const { Soc, filterList,data } = this.props;
    const flt = '/2303';
    /*to add json to firebase <button onClick={() => this.props.createProject()}>submit</button> */
    
     if(isEmpty(data))
     {return <div className="spinner" >
         <img src="/img/loading.gif" alt="loading"></img>
     </div>}
    else {

        return <div className="card z-depth-0 project-summary">{JSON.stringify(data)}</div>
    }

  }
}

const mapStateToProps = (state, ownProps) => {
   //console.log(state);
  return {
    Soc: state.firestore.ordered.Society,
    data: state.firebase.data,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
const firebaseConnect = createFirebaseConnect();
export default compose(
    firebaseConnect(['/2303']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
//   firestoreConnect([
//     {
//       collection: "Society"
//     }
//   ])
)(UserList);
