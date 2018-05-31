import React, { Component } from 'react'
import { observer } from 'mobx-react'
import form from './Form'
import LoginForm from '../../components/LoginForm/LoginForm'
// import Firebase from '../../services/Firebase';

@observer
export default class Login extends Component {
  render() {
    // Firebase.auth().onAuthStateChanged(user => {
    //   console.log('user: ', user);
    // });

    return <LoginForm form={form} />
  }
}
