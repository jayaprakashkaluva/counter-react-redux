import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import {counter} from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  counter,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
function App() {
  return (
    <Provider store={store}>
<Counter/>
    </Provider>
  );
}

export default App;
