import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

const ProjectDetails = (props) => {
  if(project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - { id }</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const project = state.firestore.data.projects[id];
  return {
    project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'projects'}
  ])
) (ProjectDetails)
