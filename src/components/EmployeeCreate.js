import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Имя"
            placeholder="Введите имя"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Телефон"
            placeholder="79991112233"
          />
        </CardSection>
        
        <CardSection>
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

export default EmployeeCreate;
