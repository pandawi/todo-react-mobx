import React from 'react';
import { observer, inject } from 'mobx-react'

const UnfinishedTasks = inject('todoStore')(observer(({ todoStore }) => (<span>Unfinished tasks: {todoStore.uncompletedTodosCount}</span>)))

export default UnfinishedTasks;