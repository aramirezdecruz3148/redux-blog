import { createStore } from 'redux';
import reducer from './reducers';
import { createComment } from './actions/commentActions';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createComment({ postIndex: 0, comment: 'good' }));

export default store;
