import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {

onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeCreate({ name, phone, shift });
}

  render() {
    return (
      <Card>
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Создать
          </Button>
        </CardSection>
      </Card>
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

export default connect(mapStateToProps, {
   employeeUpdate,
   employeeCreate
  })(EmployeeCreate);
