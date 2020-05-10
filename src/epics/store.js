import { createStore } from 'redux';
import reducer from 'epics/reducers';

const store = createStore(
  reducer
);

export default store;
