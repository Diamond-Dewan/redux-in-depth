// import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from './store/bugs';
import configureStore from './store/configureStore';
import {
  ADD_BUG,
  REMOVE_BUG,
  RESOLVE_BUG,
  ASSIGN_USER,
  selectUnresolvedBugs,
  selectBugsByUser,
} from './store/bugs';
import { ADD_PROJECT, REMOVE_PROJECT } from './store/projects';
import { ADD_USER } from './store/users';

const store = configureStore();

store.dispatch(ADD_BUG({ description: 'Bug 1' }));
store.dispatch(ADD_BUG({ description: 'Bug 2' }));
store.dispatch(ADD_BUG({ description: 'Bug 3' }));
store.dispatch(REMOVE_BUG({ id: 0 }));
store.dispatch(RESOLVE_BUG({ id: 1 }));
store.dispatch(ASSIGN_USER({ bugId: 1, userId: 0 }));

store.dispatch(ADD_PROJECT({ name: 'Project 1' }));
store.dispatch(ADD_PROJECT({ name: 'Project 2' }));
store.dispatch(ADD_PROJECT({ name: 'Project 3' }));
store.dispatch(REMOVE_PROJECT({ id: 1 }));

store.dispatch(ADD_USER({ name: 'Jhon Doe' }));

store.dispatch({ type: 'error', payload: { message: 'An error occured!!' } });

console.log(store.getState());

console.log(selectUnresolvedBugs(store.getState()));
console.log(selectBugsByUser(0)(store.getState()));
