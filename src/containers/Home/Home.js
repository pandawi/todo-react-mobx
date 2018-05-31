import React, { Component } from 'react'
import TaskList from '../../components/TaskList/TaskList'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

@observer
export default class Home extends Component {

  static propTypes = {
    todoStore: PropTypes.object
  }

  render() {
    return (
        <TaskList />
    )
  }
}
