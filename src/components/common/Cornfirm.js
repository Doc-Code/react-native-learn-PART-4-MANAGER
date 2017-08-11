import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection, Button } from './';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Да</Button>
          <Button onPress={onDecline}>Нет</Button>
        </CardSection>

      </View>
    </Modal>
);
};

export { Confirm };
