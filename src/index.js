import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
        <BookList />
        <BookDetails/>
    </div>
  </Provider>
  , document.querySelector('.container'));
