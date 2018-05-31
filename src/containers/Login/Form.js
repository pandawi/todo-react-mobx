import Form from '../../models/Form'
import Firebase from '../../services/Firebase'

const fields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25'
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25'
  }
]
/* eslint-disable */
const hooks = {
  onSuccess(form) {
    Firebase.auth().signInWithEmailAndPassword(form.values().email, form.values().password)
  },
  onError(form) {
    alert('Form has errors!')
    // get all form errors
    console.log('All form errors', form.errors())
  }
}

const form = new Form({ fields }, { hooks })

export default form
