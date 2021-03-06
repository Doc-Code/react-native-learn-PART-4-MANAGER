import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { CardSection, Card, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
_.each(this.props.employee, (value, prop) => {
  this.props.employeeUpdate({ prop, value });
});
}

onButtonPress() {
  const { name, phone, shift } = this.props;
  // console.log(name, phone, shift);
  this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
}

onTextPress() {
  const { name, phone, shift } = this.props;

  Communications.text(phone, `${name} Ваша смена в(о) ${shift}`);
}

onAccept() {
const { uid } = this.props.employee;

  this.props.employeeDelete({ uid });
}

onDecline() {
  this.setState({ showModal: false });
}

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Сохранить изменения
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Информировать
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Уволить сотрудника
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Вы действительно хотиsте уволить этого сотрудника?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
const { name, phone, shift } = state.employeeForm;

return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
