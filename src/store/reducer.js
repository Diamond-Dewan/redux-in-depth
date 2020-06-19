import { combineReducers } from 'redux';
import entitieReducer from './entities';

const reducer = combineReducers({
  entities: entitieReducer,
});

export default reducer;
