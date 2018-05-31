import React from 'react'
import { observer } from 'mobx-react'

const Task = observer(({ todo, doubleClicked }) => <li onDoubleClick={doubleClicked}>{todo.task} {todo.completed ? '-done' : null} ({todo.id})</li>)

Task.propTypes

export default Task
