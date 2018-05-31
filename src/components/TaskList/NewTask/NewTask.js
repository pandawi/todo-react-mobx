import React, { Component } from 'react'
import form from './Form'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('todoStore')
@observer
class NewTask extends Component {
  static propTypes = {
    todoStore: PropTypes.object
  }

  onSubmit = e => {
    e.preventDefault()
    form.submit({
      onSuccess: () => {
        this.props.todoStore.addTodo(form.values().task)
      },
      onError: fields => {
        console.log('error fields: ', fields)
      }
    })
  }

  render() {
    return (
      <form>
        <label htmlFor={form.$('task').id}>{form.$('task').label}</label>: &nbsp;
        <input {...form.$('task').bind()} />
        <p>{form.$('task').error}</p>

        <button type="submit" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    )
  }
}

export default NewTask
