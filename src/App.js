import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillAmount() {
    const config = {
  apiKey: 'AIzaSyCFn5yyIhIdnflc5x2-Z3OOVqJgeptRRco',
  authDomain: 'manager-dae7a.firebaseapp.com',
  databaseURL: 'https://manager-dae7a.firebaseio.com',
  projectId: 'manager-dae7a',
  storageBucket: 'manager-dae7a.appspot.com',
  messagingSenderId: '160912747035'


firebase.initializeApp(config);

}
  render() {
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            ПРивет мир!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
