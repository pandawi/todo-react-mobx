import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

const LoginForm = observer(({ form }) => (
  <form>
    <label htmlFor={form.$('email').id}>{form.$('email').label}</label>
    <input {...form.$('email').bind()} />
    <p>{form.$('email').error}</p>

    <label htmlFor={form.$('password').id}>{form.$('password').label}</label>
    <input {...form.$('password').bind({ type: 'password' })} />
    <p>{form.$('password').error}</p>

    <button type="submit" onClick={form.onSubmit}>
      Submit
    </button>
    <button type="button" onClick={form.onReset}>
      Reset
    </button>
    <button type="button" onClick={form.onClear}>
      Clear
    </button>
  </form>
))

LoginForm.propTypes = {
  form: PropTypes.any
}

export default LoginForm
