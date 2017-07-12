import { combineReducers } from 'redux';

import BookListReducer from './BookListReducer';
import SelectedBookReducer from './SelectedBookReducer';

const rootReducer = combineReducers({
  // the key is defined by us, the value is the result of the reducer
  books: BookListReducer,
  selectedBook: SelectedBookReducer
});

export default rootReducer;
