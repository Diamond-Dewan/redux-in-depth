import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import projectsReducer from './projects';

const entitieReducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});

export default entitieReducer;
