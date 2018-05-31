import { observable, computed, action } from 'mobx'
import Firebase from '../../services/Firebase'

export default class TodoStore {
  @observable tasks = []
  @observable loading = false

  constructor(api = Firebase) {
    this.api = api
    this.init()
  }

  async init() {
    this.loading = true
    const tasks = []
    try {
      const docs = await this.api
        .firestore()
        .collection('tasks')
        .get()
      docs.forEach(doc => {
        tasks.push({ ...doc.data(), id: doc.id })
      })
      this.tasks = tasks
      this.loading = false
    } catch (e) {
      this.loading = false
      console.error('e: ', e)
    }
  }

  @computed
  get completedTodosCount() {
    return this.tasks.filter(todo => todo.completed === true).length
  }

  @computed
  get uncompletedTodosCount() {
    return this.tasks.filter(todo => todo.completed === false).length
  }

  @computed
  get report() {
    if (this.tasks.length === 0) return '<none>'
    return `Next todo: "${this.tasks[0].task}". ` + `Progress: ${this.completedTodosCount}/${this.tasks.length}`
  }

  @action
  markCompleted = async taskId => {
    const _todo = this.tasks.find(({ id }) => id === taskId)
    if (_todo) {
      try {
        await this.api
          .firestore()
          .collection('tasks')
          .doc(_todo.id)
          .update({ completed: !_todo.completed })
        _todo.completed = !_todo.completed
      } catch (e) {
        console.error(e)
      }
    } else {
      console.info('task not found')
    }
  }

  @action
  addTodo = async task => {
    const newTask = {
      task,
      completed: false,
      assignee: null
    }

    try {
      const { id } = await this.api
        .firestore()
        .collection('tasks')
        .add(newTask)
      this.tasks = [...this.tasks, { id, ...newTask }]
    } catch (e) {
      console.error('e: ', e)
    }
  }
}
