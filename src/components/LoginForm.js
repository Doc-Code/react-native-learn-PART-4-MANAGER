import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Пароль"
            secureTextEntry
            placeholder="Password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Войти
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
