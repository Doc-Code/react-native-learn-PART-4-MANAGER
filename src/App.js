import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux0';

class App extends Component {
  render() {
    return(
      <Provider store={createStore()}>
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
