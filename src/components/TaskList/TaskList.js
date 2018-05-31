import React from 'react'
import { observer, inject } from 'mobx-react'
import Task from './Task/Task'
import NewTask from './NewTask/NewTask'
import UnfinishedTasks from './Unfinished-Tasks/Unfinished-Tasks'

const TaskList = inject('todoStore')(
  observer(({ todoStore }) => (
    <div>
      <UnfinishedTasks />
      <NewTask />
      <ul className="task-list">
        {todoStore.loading ? 'loading' : todoStore.tasks.map((todo, idx) => <Task key={idx} todo={todo} doubleClicked={todoStore.markCompleted.bind(this, todo.id)} />)}
      </ul>
    </div>
  ))
)

export default TaskList
