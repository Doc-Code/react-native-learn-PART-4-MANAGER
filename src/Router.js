import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Авторизация"
        />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Добавить"
          key="employeeList"
          component={EmployeeList}
          title="Список сотрудников"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Добавить нового"
        />
      </Scene>
      <Scene key="employeeEdit" component={EmployeeEdit} title="Редактировать" />

    </Router>

  );
};

export default RouterComponent;
