import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
