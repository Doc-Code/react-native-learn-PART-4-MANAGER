import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
return (
  <View>
    <CardSection>
      <Input
        label="Имя"
        placeholder="Введите имя"
        value={this.props.name}
        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
      />
    </CardSection>

    <CardSection>
      <Input
        label="Телефон"
        placeholder="79991112233"
        value={this.props.phone}
        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
      />
    </CardSection>

    <CardSection style={{ flexDirection: 'column' }}>
      <Text style={styles.pickerTextStyle}>Смена</Text>
      <Picker
        style={{ height: 50 }}
        selectedValue={this.props.shift}
        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
      >
        <Picker.Item label="Понедельник" value="Понедельник" />
        <Picker.Item label="Вторник" value="Вторник" />
        <Picker.Item label="Среда" value="Среда" />
        <Picker.Item label="Четверг" value="Четверг" />
        <Picker.Item label="Пятница" value="Пятница" />
        <Picker.Item label="Суббота" value="Суббота" />
        <Picker.Item label="Воскресенье" value="Воскресенье" />
      </Picker>
    </CardSection>
  </View>
);
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

 export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
