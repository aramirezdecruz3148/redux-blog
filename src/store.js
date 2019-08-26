import { createStore } from 'redux';
import reducer from './reducers';
import { createPost } from './actions/postActions';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createPost({ title: 'a post', body: 'the stuff' }));

export default store;
