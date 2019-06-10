import React from "react";
import { connect } from "react-redux";
import { firestoreConnect,createFirebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createProject } from "../../store/actions/projectActions";
import { firebase, helpers } from 'react-redux-firebase'
import PropTypes from 'prop-types'; // ES6
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers


//firebase.push('/todos', { text: newTodo.value, done: false })
class UserList extends React.Component {
    
  render() {
    const { Soc,data,filterList,filteredData  } = this.props;
    const flt = '/2303';
    /*to add json to firebase <button onClick={() => this.props.createProject()}>submit</button> */
    var filteredData2 = [
        {
            "तालुका रत्नागिरी": "मंडणगड",
            "संस्था प्रकार कार्यालयाप्रमाणे": "शेती पतपुरवठा",
            "संस्था प्रकार डी ओ प्रमाणे": "विविध कार्यकारी संस्था",
            "संस्थेचे नांव": "पालवणी शेडवई विविध कार्यकारी सेवा सहकारी संस्था मर्या,  पालवणी",
        },
        {
                "तालुका रत्नागिरी": "dkjkj",
                "संस्था प्रकार कार्यालयाप्रमाणे": "sdlkf पतपुरवठा",
                "संस्था प्रकार डी ओ प्रमाणे": "saddkskl कार्यकारी संस्था",
                "संस्थेचे नांव": "sddslk शेडवई विविध कार्यकारी सेवा सहकारी संस्था मर्या,  पालवणी",
        }
    ]
     if(filteredData == null || filteredData.length == 0)
     {return <div className="spinner" >
         <img src="/img/loading.gif" alt="loading"></img>
     </div>}
    else {

        return <div className="">
            <div className="tr" style={{display:"table-row"}}>
            {
                Object.keys(filteredData[0]).map((ob1,i)=>  
                <div key={ob1 + i} className="td th" style={{}} >{ob1}</div>
                )                    
            } 
            </div>
            {filteredData.map((obj,j)=> {
                let obj1 = Object.values(obj);
                return <div key={j} className="tr" style={{display:"table-row"}}>
                    {
                        obj1.map((ob1,i)=>  <div key={ob1 + i} className="td" style={{border:"1px solid",display:"table-cell"}} >{ob1}</div>)
                    }
                </div>
                 
            } ) }
        </div>
    }

  }
}
UserList.propTypes = {
    filteredData:PropTypes.array
}
const mapStateToProps = (state, ownProps) => {
   //console.log(state);
  return {
    data: state.firebase.data,
    filteredData:state.updateSocRdx
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
const firebaseConnect = createFirebaseConnect();
export default compose(
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
