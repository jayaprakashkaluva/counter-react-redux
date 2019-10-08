import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import{counter} from './reducers';

const store = createStore(counter);
function App() {
  return (
    <Provider store={store}>
<Counter/>
    </Provider>
  );
}

export default App;
