import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
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

        <CardSection>
          <Picker
            style={{ flex: 1 }}
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
          <Button>
            Создать
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
