import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { CardSection, Card, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button >
            Сохранить изменения
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeEdit;
