import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
  apiKey: 'AIzaSyCFn5yyIhIdnflc5x2-Z3OOVqJgeptRRco',
  authDomain: 'manager-dae7a.firebaseapp.com',
  databaseURL: 'https://manager-dae7a.firebaseio.com',
  projectId: 'manager-dae7a',
  storageBucket: 'manager-dae7a.appspot.com',
  messagingSenderId: '160912747035'
};

firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
