const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

const ProjectReducer = (state= initState, action) => {
  switch(action.type) {
      case  'CREATE_PROJECT_SUCCESS' : 
      console.log('project added successfully');
      return state;

      case 'CREATE_PROJECT_ERROR' : 
      console.log('there is an Error to create Project');
      return state;
      default : return state;      
  }
}


export default ProjectReducer;