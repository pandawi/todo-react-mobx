import Form from '../../../models/Form'

const fields = [
  {
    name: 'task',
    label: 'New Task',
    placeholder: 'Insert Task',
    rules: 'required'
  }
]

const form = new Form({ fields })

export default form
