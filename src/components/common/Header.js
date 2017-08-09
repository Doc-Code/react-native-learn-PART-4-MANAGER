// Import library for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};

const styles = {
  viewStyle: {
    backgroundColor: '#7c9bb0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make a component availavle to other parts of the app
export { Header };
